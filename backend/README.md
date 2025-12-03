# PoliticianHub WhatsApp Backend

Backend server for WhatsApp Business API integration with real-time WebSocket support.

## Features

- ✅ WhatsApp Business API integration
- ✅ Real-time message broadcasting via WebSocket
- ✅ Webhook endpoint for incoming messages
- ✅ Sentiment analysis
- ✅ Interactive survey support
- ✅ Message read receipts
- ✅ Analytics endpoints

## Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your WhatsApp credentials
```

### 3. Get WhatsApp Credentials

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app → Select "Business" type
3. Add WhatsApp product
4. Get your **Phone Number ID** from WhatsApp → API Setup
5. Generate **Permanent Access Token** from System Users
6. Copy these values to your `.env` file

### 4. Start Server

```bash
npm start
# or for development with auto-reload:
npm run dev
```

Server will start on:
- HTTP: `http://localhost:3000`
- WebSocket: `ws://localhost:3001`

### 5. Configure Webhook (for production)

1. Use ngrok for local testing:
   ```bash
   ngrok http 3000
   ```

2. In Meta Developer Dashboard → WhatsApp → Configuration:
   - Callback URL: `https://your-ngrok-url.ngrok.io/webhooks/whatsapp`
   - Verify Token: Use the same value as `WEBHOOK_VERIFY_TOKEN` in `.env`
   - Subscribe to: `messages`

## API Endpoints

### Health Check
```
GET /health
```

### Send Text Message
```
POST /api/whatsapp/send
Content-Type: application/json

{
  "to": "+1234567890",
  "message": "Hello from PoliticianHub!",
  "type": "text"
}
```

### Send Feedback Survey
```
POST /api/whatsapp/send-survey
Content-Type: application/json

{
  "to": "+1234567890",
  "constituency": "North District"
}
```

### Get Analytics
```
GET /api/whatsapp/analytics
```

### Webhook Endpoints
```
GET  /webhooks/whatsapp  (verification)
POST /webhooks/whatsapp  (incoming messages)
```

## WebSocket Connection

Connect from frontend:
```javascript
const ws = new WebSocket('ws://localhost:3001');

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('New message:', message);
};
```

## Testing Locally

1. Start the backend server
2. Start the Angular frontend (`npm start` from project root)
3. Use ngrok to expose webhook:
   ```bash
   ngrok http 3000
   ```
4. Configure webhook URL in Meta Developer Dashboard
5. Send a test message from WhatsApp to your business number
6. Watch messages appear in real-time in the dashboard!

## Deployment

### Heroku

```bash
heroku create politicianhub-whatsapp
heroku config:set WHATSAPP_PHONE_ID=your_phone_id
heroku config:set WHATSAPP_ACCESS_TOKEN=your_token
heroku config:set WEBHOOK_VERIFY_TOKEN=your_verify_token
git subtree push --prefix backend heroku main
```

### Render

1. Connect your GitHub repo
2. Select `backend` as root directory
3. Add environment variables in dashboard
4. Deploy

### Docker

```bash
docker build -t politicianhub-backend .
docker run -p 3000:3000 -p 3001:3001 --env-file .env politicianhub-backend
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `WHATSAPP_PHONE_ID` | WhatsApp Business Phone Number ID | Yes |
| `WHATSAPP_ACCESS_TOKEN` | Permanent Access Token from Meta | Yes |
| `WEBHOOK_VERIFY_TOKEN` | Custom token for webhook verification | Yes |
| `PORT` | HTTP server port | No (default: 3000) |
| `NODE_ENV` | Environment (development/production) | No |

## Troubleshooting

### Webhook Verification Fails
- Ensure `WEBHOOK_VERIFY_TOKEN` matches in both `.env` and Meta dashboard
- Check that the webhook URL is publicly accessible
- Verify ngrok is forwarding correctly

### Messages Not Received
- Check webhook is subscribed to `messages` field
- Verify phone number is opted-in to WhatsApp Business
- Check server logs for errors
- Ensure WhatsApp access token is valid

### WebSocket Connection Fails
- Verify WebSocket server is running on port 3001
- Check CORS settings if connecting from different origin
- Ensure firewall allows WebSocket connections

## Production Considerations

- [ ] Add database for message persistence
- [ ] Implement Redis for caching and rate limiting
- [ ] Add authentication/authorization
- [ ] Set up proper logging (Winston/Bunyan)
- [ ] Implement message queuing (Bull/RabbitMQ)
- [ ] Add monitoring (Prometheus/Grafana)
- [ ] Set up SSL certificates
- [ ] Configure load balancing for scaling
- [ ] Implement backup and disaster recovery

## Support

For issues or questions, check:
- [WhatsApp Business API Docs](https://developers.facebook.com/docs/whatsapp)
- [WebSocket API Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- Project issues on GitHub

## License

MIT
