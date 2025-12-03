import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface WhatsAppMessage {
  id: string;
  from: string;
  name: string;
  message: string;
  timestamp: Date;
  category?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  rating?: number;
}

export interface WhatsAppResponse {
  messageId: string;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsAppFeedbackService {
  private apiUrl = 'https://api.whatsapp.com/v1'; // Replace with actual WhatsApp Business API endpoint
  private webhookUrl = '/api/whatsapp/webhook'; // Your backend webhook endpoint
  
  // WebSocket for real-time messages (replace with actual WebSocket URL)
  private ws: WebSocket | null = null;
  private messagesSubject = new Subject<WhatsAppMessage>();
  
  constructor(private http: HttpClient) {}

  /**
   * Initialize WebSocket connection for real-time message updates
   */
  connectRealtime(): Observable<WhatsAppMessage> {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      // Replace with your actual WebSocket URL
      this.ws = new WebSocket('wss://your-backend.com/ws/whatsapp');
      
      this.ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        this.messagesSubject.next(this.parseIncomingMessage(message));
      };
      
      this.ws.onerror = (error) => {
        console.error('WhatsApp WebSocket error:', error);
      };
      
      this.ws.onclose = () => {
        console.log('WhatsApp WebSocket disconnected');
        // Implement reconnection logic
        setTimeout(() => this.connectRealtime(), 5000);
      };
    }
    
    return this.messagesSubject.asObservable();
  }

  /**
   * Disconnect WebSocket
   */
  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  /**
   * Send feedback survey via WhatsApp
   */
  sendFeedbackSurvey(phoneNumber: string, surveyData: any): Observable<WhatsAppResponse> {
    const payload = {
      to: phoneNumber,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: {
          type: 'text',
          text: 'Constituency Feedback Survey'
        },
        body: {
          text: surveyData.question || 'How would you rate our services?'
        },
        action: {
          button: 'Rate Us',
          sections: [
            {
              title: 'Your Rating',
              rows: [
                { id: '5', title: '⭐⭐⭐⭐⭐ Excellent', description: '5 stars' },
                { id: '4', title: '⭐⭐⭐⭐ Good', description: '4 stars' },
                { id: '3', title: '⭐⭐⭐ Average', description: '3 stars' },
                { id: '2', title: '⭐⭐ Below Average', description: '2 stars' },
                { id: '1', title: '⭐ Poor', description: '1 star' }
              ]
            }
          ]
        }
      }
    };
    
    return this.http.post<WhatsAppResponse>(`${this.apiUrl}/messages`, payload);
  }

  /**
   * Send a simple text message
   */
  sendTextMessage(phoneNumber: string, message: string): Observable<WhatsAppResponse> {
    const payload = {
      to: phoneNumber,
      type: 'text',
      text: {
        body: message
      }
    };
    
    return this.http.post<WhatsAppResponse>(`${this.apiUrl}/messages`, payload);
  }

  /**
   * Send feedback form with buttons
   */
  sendFeedbackButtons(phoneNumber: string, category: string): Observable<WhatsAppResponse> {
    const payload = {
      to: phoneNumber,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: {
          text: `Thank you for your feedback on ${category}. Would you like to provide more details?`
        },
        action: {
          buttons: [
            {
              type: 'reply',
              reply: {
                id: 'yes_details',
                title: 'Yes, add details'
              }
            },
            {
              type: 'reply',
              reply: {
                id: 'no_thanks',
                title: 'No, thank you'
              }
            }
          ]
        }
      }
    };
    
    return this.http.post<WhatsAppResponse>(`${this.apiUrl}/messages`, payload);
  }

  /**
   * Get conversation history with a voter
   */
  getConversationHistory(phoneNumber: string): Observable<WhatsAppMessage[]> {
    return this.http.get<WhatsAppMessage[]>(`/api/whatsapp/conversations/${phoneNumber}`);
  }

  /**
   * Parse incoming WhatsApp webhook message
   */
  private parseIncomingMessage(data: any): WhatsAppMessage {
    return {
      id: data.id || Date.now().toString(),
      from: data.from || data.wa_id,
      name: data.profile?.name || 'Unknown',
      message: data.text?.body || data.interactive?.button_reply?.title || '',
      timestamp: new Date(data.timestamp * 1000),
      rating: this.extractRating(data),
      sentiment: this.analyzeSentiment(data.text?.body)
    };
  }

  /**
   * Extract rating from interactive reply
   */
  private extractRating(data: any): number | undefined {
    if (data.interactive?.list_reply?.id) {
      return parseInt(data.interactive.list_reply.id);
    }
    return undefined;
  }

  /**
   * Simple sentiment analysis
   */
  private analyzeSentiment(text: string): 'positive' | 'neutral' | 'negative' {
    if (!text) return 'neutral';
    
    const positiveWords = ['good', 'great', 'excellent', 'happy', 'satisfied', 'love', 'best', 'wonderful', 'amazing'];
    const negativeWords = ['bad', 'poor', 'terrible', 'worst', 'hate', 'disappointed', 'unhappy', 'awful'];
    
    const lowerText = text.toLowerCase();
    const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
    const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
    
    if (positiveCount > negativeCount) return 'positive';
    if (negativeCount > positiveCount) return 'negative';
    return 'neutral';
  }

  /**
   * Mark message as read
   */
  markAsRead(messageId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/messages/${messageId}/read`, {});
  }

  /**
   * Get analytics for WhatsApp channel
   */
  getAnalytics(dateRange: { start: Date; end: Date }): Observable<any> {
    return this.http.get('/api/whatsapp/analytics', {
      params: {
        start: dateRange.start.toISOString(),
        end: dateRange.end.toISOString()
      }
    });
  }
}
