const express = require('express');
const WebSocket = require('ws');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// WebSocket server for real-time updates
const wss = new WebSocket.Server({ port: 3001 });

// Store active WebSocket connections
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('✅ New WebSocket client connected. Total clients:', clients.size);
  
  ws.on('close', () => {
    clients.delete(ws);
    console.log('❌ WebSocket client disconnected. Total clients:', clients.size);
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clients.delete(ws);
  });
});

// Broadcast message to all connected clients
function broadcastMessage(message) {
  const messageStr = JSON.stringify(message);
  let successCount = 0;
  
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      try {
        client.send(messageStr);
        successCount++;
      } catch (error) {
        console.error('Error broadcasting to client:', error);
      }
    }
  });
  
  console.log(`📡 Broadcasted message to ${successCount} clients`);
}

// WhatsApp Business API Configuration
const WHATSAPP_CONFIG = {
  phoneNumberId: process.env.WHATSAPP_PHONE_ID || '',
  accessToken: process.env.WHATSAPP_ACCESS_TOKEN || '',
  verifyToken: process.env.WEBHOOK_VERIFY_TOKEN || 'politicianhub_webhook_2025',
  apiVersion: 'v18.0'
};

// Validate configuration on startup
if (!WHATSAPP_CONFIG.phoneNumberId || !WHATSAPP_CONFIG.accessToken) {
  console.warn('⚠️  WARNING: WhatsApp credentials not configured!');
  console.warn('Set WHATSAPP_PHONE_ID and WHATSAPP_ACCESS_TOKEN environment variables');
}

// ============== WEBHOOK ENDPOINTS ==============

// WhatsApp Webhook Verification (GET)
app.get('/webhooks/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  console.log('📥 Webhook verification request received');
  
  if (mode === 'subscribe' && token === WHATSAPP_CONFIG.verifyToken) {
    console.log('✅ Webhook verified successfully');
    res.status(200).send(challenge);
  } else {
    console.error('❌ Webhook verification failed');
    res.sendStatus(403);
  }
});

// WhatsApp Webhook (POST) - Receive incoming messages
app.post('/webhooks/whatsapp', (req, res) => {
  const body = req.body;
  
  console.log('📨 Webhook POST received:', JSON.stringify(body, null, 2));
  
  try {
    if (body.object === 'whatsapp_business_account') {
      body.entry?.forEach(entry => {
        entry.changes?.forEach(change => {
          if (change.value?.messages) {
            const message = change.value.messages[0];
            const contact = change.value.contacts?.[0];
            
            console.log('💬 Processing message:', message.id);
            
            // Format message for frontend
            const formattedMessage = {
              id: message.id,
              from: message.from,
              name: contact?.profile?.name || 'Unknown Voter',
              message: extractMessageText(message),
              timestamp: new Date(parseInt(message.timestamp) * 1000),
              category: null,
              sentiment: analyzeSentiment(extractMessageText(message)),
              rating: extractRating(message),
              read: false
            };
            
            // Broadcast to all connected WebSocket clients
            broadcastMessage(formattedMessage);
            
            // Mark message as read
            markMessageAsRead(message.id);
            
            console.log('✅ Message processed and broadcasted');
          }
          
          // Handle message status updates
          if (change.value?.statuses) {
            const status = change.value.statuses[0];
            console.log(`📊 Message status: ${status.status} for ${status.id}`);
          }
        });
      });
    }
    
    res.sendStatus(200);
  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    res.sendStatus(500);
  }
});

// ============== API ENDPOINTS ==============

// Send WhatsApp Text Message
app.post('/api/whatsapp/send', async (req, res) => {
  const { to, message, type = 'text', interactive } = req.body;
  
  if (!WHATSAPP_CONFIG.phoneNumberId || !WHATSAPP_CONFIG.accessToken) {
    return res.status(500).json({ error: 'WhatsApp not configured' });
  }
  
  try {
    console.log(`📤 Sending ${type} message to ${to}`);
    
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: to.replace(/\D/g, ''), // Remove non-digits
      type: type
    };
    
    if (type === 'text') {
      payload.text = { body: message };
    } else if (type === 'interactive') {
      payload.interactive = interactive;
    }
    
    const response = await axios.post(
      `https://graph.facebook.com/${WHATSAPP_CONFIG.apiVersion}/${WHATSAPP_CONFIG.phoneNumberId}/messages`,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${WHATSAPP_CONFIG.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('✅ Message sent successfully:', response.data);
    res.json({
      messageId: response.data.messages[0].id,
      status: 'sent',
      timestamp: new Date()
    });
  } catch (error) {
    console.error('❌ Error sending message:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: error.response?.data || error.message
    });
  }
});

// Send Feedback Survey
app.post('/api/whatsapp/send-survey', async (req, res) => {
  const { to, constituency } = req.body;
  
  const interactive = {
    type: 'list',
    header: {
      type: 'text',
      text: 'Feedback Survey'
    },
    body: {
      text: `Hello! How would you rate the work being done in ${constituency || 'your area'}? Your feedback helps us serve you better.`
    },
    footer: {
      text: 'Your response is confidential'
    },
    action: {
      button: 'Rate Us',
      sections: [
        {
          title: 'Please select your rating',
          rows: [
            { id: '5', title: '⭐⭐⭐⭐⭐ Excellent', description: 'Very satisfied' },
            { id: '4', title: '⭐⭐⭐⭐ Good', description: 'Satisfied' },
            { id: '3', title: '⭐⭐⭐ Average', description: 'Neutral' },
            { id: '2', title: '⭐⭐ Poor', description: 'Not satisfied' },
            { id: '1', title: '⭐ Very Poor', description: 'Very dissatisfied' }
          ]
        }
      ]
    }
  };
  
  req.body.type = 'interactive';
  req.body.interactive = interactive;
  
  return app._router.handle(req, res);
});

// Get Conversation History
app.get('/api/whatsapp/history/:phoneNumber', async (req, res) => {
  // In a real implementation, this would fetch from a database
  res.json({
    phoneNumber: req.params.phoneNumber,
    messages: [],
    totalCount: 0
  });
});

// Get Analytics
app.get('/api/whatsapp/analytics', async (req, res) => {
  // In a real implementation, this would query actual data
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  res.json({
    totalMessages: 1250,
    todayMessages: 47,
    responseRate: 68,
    averageRating: 4.2,
    sentimentBreakdown: {
      positive: 58,
      neutral: 27,
      negative: 15
    },
    peakHours: [9, 10, 11, 18, 19, 20],
    topCategories: [
      { name: 'Infrastructure', count: 342 },
      { name: 'Healthcare', count: 218 },
      { name: 'Education', count: 195 },
      { name: 'Employment', count: 167 },
      { name: 'Water Supply', count: 143 }
    ]
  });
});

// Mark Message as Read
async function markMessageAsRead(messageId) {
  if (!WHATSAPP_CONFIG.phoneNumberId || !WHATSAPP_CONFIG.accessToken) {
    return;
  }
  
  try {
    await axios.post(
      `https://graph.facebook.com/${WHATSAPP_CONFIG.apiVersion}/${WHATSAPP_CONFIG.phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        status: 'read',
        message_id: messageId
      },
      {
        headers: {
          'Authorization': `Bearer ${WHATSAPP_CONFIG.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('✅ Message marked as read:', messageId);
  } catch (error) {
    console.error('❌ Error marking message as read:', error.response?.data || error.message);
  }
}

// ============== UTILITY FUNCTIONS ==============

function extractMessageText(message) {
  if (message.text?.body) {
    return message.text.body;
  }
  if (message.interactive?.list_reply) {
    return message.interactive.list_reply.title;
  }
  if (message.interactive?.button_reply) {
    return message.interactive.button_reply.title;
  }
  return '[Media message]';
}

function extractRating(message) {
  if (message.interactive?.list_reply) {
    const id = message.interactive.list_reply.id;
    const rating = parseInt(id);
    return isNaN(rating) ? null : rating;
  }
  
  // Try to extract from text
  const text = extractMessageText(message).toLowerCase();
  const match = text.match(/(\d+)\s*(star|\/5)/);
  if (match) {
    return parseInt(match[1]);
  }
  
  return null;
}

function analyzeSentiment(text) {
  const lowerText = text.toLowerCase();
  
  const positiveWords = [
    'good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love',
    'best', 'awesome', 'happy', 'satisfied', 'pleased', 'thankful', 'appreciate',
    'helpful', 'improve', 'better', 'progress', 'support', 'working'
  ];
  
  const negativeWords = [
    'bad', 'poor', 'terrible', 'awful', 'horrible', 'worst', 'hate',
    'angry', 'disappointed', 'unhappy', 'frustrated', 'problem', 'issue',
    'broken', 'failure', 'never', 'nothing', 'useless', 'waste', 'neglect'
  ];
  
  let positiveCount = 0;
  let negativeCount = 0;
  
  positiveWords.forEach(word => {
    if (lowerText.includes(word)) positiveCount++;
  });
  
  negativeWords.forEach(word => {
    if (lowerText.includes(word)) negativeCount++;
  });
  
  if (positiveCount > negativeCount) return 'positive';
  if (negativeCount > positiveCount) return 'negative';
  return 'neutral';
}

// ============== HEALTH CHECK ==============

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    websocketClients: clients.size,
    whatsappConfigured: !!(WHATSAPP_CONFIG.phoneNumberId && WHATSAPP_CONFIG.accessToken)
  });
});

// ============== START SERVER ==============

app.listen(PORT, () => {
  console.log('\n🚀 PoliticianHub WhatsApp Backend Server Started');
  console.log('================================================');
  console.log(`📡 HTTP Server: http://localhost:${PORT}`);
  console.log(`🔌 WebSocket Server: ws://localhost:3001`);
  console.log(`📱 WhatsApp Configured: ${WHATSAPP_CONFIG.phoneNumberId ? 'Yes' : 'No'}`);
  console.log('================================================\n');
  
  if (!WHATSAPP_CONFIG.phoneNumberId || !WHATSAPP_CONFIG.accessToken) {
    console.log('⚠️  To enable WhatsApp, set these environment variables:');
    console.log('   export WHATSAPP_PHONE_ID="your_phone_number_id"');
    console.log('   export WHATSAPP_ACCESS_TOKEN="your_access_token"');
    console.log('   export WEBHOOK_VERIFY_TOKEN="your_verify_token"\n');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('📴 Shutting down gracefully...');
  wss.close(() => {
    console.log('✅ WebSocket server closed');
    process.exit(0);
  });
});
