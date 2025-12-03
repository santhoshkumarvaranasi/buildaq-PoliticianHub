# WhatsApp Real-Time Feedback Integration

## Overview

The PoliticianHub platform now includes real-time WhatsApp feedback collection, allowing constituents to provide feedback via WhatsApp messages that appear instantly in your dashboard.

## Features

✅ **Real-time messaging** via WebSocket connection
✅ **Interactive surveys** with rating buttons (1-5 stars)
✅ **Sentiment analysis** of incoming messages
✅ **Two-way communication** - send replies directly from dashboard
✅ **Message categorization** and grievance creation
✅ **Live analytics** with response rates and ratings
✅ **Export capabilities** for data analysis

## Prerequisites

1. **WhatsApp Business Account** - [Sign up here](https://business.whatsapp.com/)
2. **Meta Developer Account** - [Create account](https://developers.facebook.com/)
3. **WhatsApp Business API Access** - Apply through Meta Business
4. **Backend Server** - Node.js/Express server with WebSocket support

## Setup Instructions

### 1. WhatsApp Business API Configuration

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app and select "Business" type
3. Add WhatsApp product to your app
4. Set up a phone number:
   - Add a test number or verify your business phone
   - Note down your **Phone Number ID**
5. Generate a permanent access token:
   - Go to System Users → Add System User
   - Assign app permissions
   - Generate token with `whatsapp_business_messaging` permission
   - Save this **Access Token** securely

### 2. Environment Configuration

Update `/src/environments/environment.ts`:

```typescript
whatsapp: {
  apiUrl: 'http://localhost:3000/api/whatsapp',
  webhookUrl: 'http://localhost:3000/webhooks/whatsapp',
  websocketUrl: 'ws://localhost:3000/ws/whatsapp',
  businessPhoneId: 'YOUR_PHONE_NUMBER_ID', // From step 1
  accessToken: 'YOUR_ACCESS_TOKEN' // From step 1
}
```

For production, set environment variables:
```bash
export WHATSAPP_PHONE_ID="your_phone_id"
export WHATSAPP_ACCESS_TOKEN="your_access_token"
```

### 3. Backend Server Setup

Create a Node.js backend with the following endpoints:

#### Install Dependencies
```bash
npm install express ws axios body-parser
```

#### Server Implementation (`server.js`)

```javascript
const express = require('express');
const WebSocket = require('ws');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// WebSocket server for real-time updates
const wss = new WebSocket.Server({ port: 3001 });

// Store active WebSocket connections
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('New WebSocket client connected');
  
  ws.on('close', () => {
    clients.delete(ws);
    console.log('WebSocket client disconnected');
  });
});

// Broadcast message to all connected clients
function broadcastMessage(message) {
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

app.use(bodyParser.json());

// WhatsApp Webhook Verification (GET)
app.get('/webhooks/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  const VERIFY_TOKEN = 'your_verify_token_here'; // Set your own token
  
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// WhatsApp Webhook (POST) - Receive incoming messages
app.post('/webhooks/whatsapp', (req, res) => {
  const body = req.body;
  
  if (body.object === 'whatsapp_business_account') {
    body.entry?.forEach(entry => {
      entry.changes?.forEach(change => {
        if (change.value?.messages) {
          const message = change.value.messages[0];
          const contact = change.value.contacts?.[0];
          
          // Broadcast to WebSocket clients
          const formattedMessage = {
            id: message.id,
            from: message.from,
            name: contact?.profile?.name || 'Unknown',
            message: message.text?.body || message.interactive?.list_reply?.title || '',
            timestamp: new Date(parseInt(message.timestamp) * 1000),
            category: null,
            sentiment: 'neutral',
            rating: extractRating(message)
          };
          
          broadcastMessage(formattedMessage);
        }
      });
    });
  }
  
  res.sendStatus(200);
});

// Send WhatsApp Message API
app.post('/api/whatsapp/send', async (req, res) => {
  const { to, message, type = 'text', interactive } = req.body;
  
  const PHONE_ID = process.env.WHATSAPP_PHONE_ID;
  const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
  
  try {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: to,
      type: type
    };
    
    if (type === 'text') {
      payload.text = { body: message };
    } else if (type === 'interactive') {
      payload.interactive = interactive;
    }
    
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${PHONE_ID}/messages`,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    res.json(response.data);
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response?.data || error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get Analytics
app.get('/api/whatsapp/analytics', (req, res) => {
  // Implement your analytics logic here
  res.json({
    totalMessages: 1250,
    responseRate: 68,
    averageRating: 4.2
  });
});

function extractRating(message) {
  if (message.interactive?.list_reply) {
    const title = message.interactive.list_reply.title;
    const match = title.match(/(\d+)/);
    return match ? parseInt(match[1]) : null;
  }
  return null;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WebSocket server running on port 3001`);
});
```

### 4. Configure WhatsApp Webhook

1. Go to your WhatsApp app configuration in Meta for Developers
2. Navigate to WhatsApp → Configuration
3. Add webhook callback URL: `https://your-domain.com/webhooks/whatsapp`
4. Set verify token (same as in your server code)
5. Subscribe to webhook fields:
   - `messages`
   - `message_status`

### 5. Testing Locally with ngrok

For local development, use ngrok to expose your webhook:

```bash
# Install ngrok
npm install -g ngrok

# Start your server
node server.js

# In another terminal, expose webhook
ngrok http 3000

# Use the ngrok URL in WhatsApp webhook configuration
# Example: https://abc123.ngrok.io/webhooks/whatsapp
```

### 6. Start the Application

```bash
# Start backend server
node server.js

# In another terminal, start Angular app
npm start

# Navigate to: http://localhost:4004
# Go to: Communications → Feedback Management → WhatsApp Live tab
```

## Usage

### Sending Feedback Surveys

1. Click "Send Survey" button in WhatsApp Live tab
2. Enter voter phone numbers (format: +1234567890)
3. Survey with 1-5 star rating will be sent via WhatsApp
4. Responses appear in real-time in the dashboard

### Replying to Messages

1. Click "Reply" button on any message card
2. Type your response
3. Message sent instantly via WhatsApp

### Creating Grievances

1. Click "Create Grievance" on negative feedback messages
2. Automatically creates ticket in Grievances module
3. Tracks issue resolution

## API Endpoints

### Send Text Message
```
POST /api/whatsapp/send
{
  "to": "+1234567890",
  "message": "Thank you for your feedback!",
  "type": "text"
}
```

### Send Interactive Survey
```
POST /api/whatsapp/send
{
  "to": "+1234567890",
  "type": "interactive",
  "interactive": {
    "type": "list",
    "header": { "type": "text", "text": "Feedback Survey" },
    "body": { "text": "How would you rate our service?" },
    "action": {
      "button": "Rate Us",
      "sections": [{
        "title": "Rating",
        "rows": [
          { "id": "1", "title": "⭐ 1 Star" },
          { "id": "2", "title": "⭐⭐ 2 Stars" },
          { "id": "3", "title": "⭐⭐⭐ 3 Stars" },
          { "id": "4", "title": "⭐⭐⭐⭐ 4 Stars" },
          { "id": "5", "title": "⭐⭐⭐⭐⭐ 5 Stars" }
        ]
      }]
    }
  }
}
```

### Get Analytics
```
GET /api/whatsapp/analytics
```

## Security Best Practices

1. **Never commit access tokens** to git
2. Use **environment variables** for sensitive data
3. Validate webhook signatures from Meta
4. Implement **rate limiting** on API endpoints
5. Use **HTTPS** in production
6. Implement **user authentication** for dashboard access

## Troubleshooting

### Messages Not Appearing

1. Check WebSocket connection status (green dot = connected)
2. Verify webhook is receiving POST requests
3. Check browser console for errors
4. Ensure backend server is running

### Webhook Verification Failed

1. Verify token must match exactly
2. Webhook URL must be publicly accessible
3. Check ngrok is forwarding correctly

### Messages Not Sending

1. Verify access token is valid
2. Check phone number format (+country code)
3. Ensure phone number is opted-in to WhatsApp Business
4. Check API rate limits

## Production Deployment

### Backend Deployment (Heroku Example)

```bash
# Install Heroku CLI
heroku create your-app-name

# Set environment variables
heroku config:set WHATSAPP_PHONE_ID=your_phone_id
heroku config:set WHATSAPP_ACCESS_TOKEN=your_token

# Deploy
git push heroku main

# Update WhatsApp webhook URL to Heroku app URL
```

### Frontend Deployment

Update production environment with backend URLs:
```typescript
whatsapp: {
  apiUrl: 'https://your-app.herokuapp.com/api/whatsapp',
  webhookUrl: 'https://your-app.herokuapp.com/webhooks/whatsapp',
  websocketUrl: 'wss://your-app.herokuapp.com/ws/whatsapp',
  businessPhoneId: process.env['WHATSAPP_PHONE_ID'],
  accessToken: process.env['WHATSAPP_ACCESS_TOKEN']
}
```

## Cost Considerations

- WhatsApp Business API charges per conversation
- First 1,000 conversations/month are free
- After that, rates vary by country (~$0.005-0.05 per message)
- Check [Meta pricing](https://developers.facebook.com/docs/whatsapp/pricing)

## Resources

- [WhatsApp Business API Documentation](https://developers.facebook.com/docs/whatsapp)
- [Interactive Messages Guide](https://developers.facebook.com/docs/whatsapp/guides/interactive-messages)
- [Webhook Setup Guide](https://developers.facebook.com/docs/whatsapp/webhooks)
- [Cloud API Quick Start](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started)

## Support

For issues or questions:
- Open an issue in the repository
- Check Meta Developer Community
- Review WhatsApp Business API documentation

---

**Note**: This is a demo implementation. For production use, implement proper error handling, logging, database storage, and security measures.
