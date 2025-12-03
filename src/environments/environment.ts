export const environment = {
  production: false,
  // Use explicit IPv4 loopback to avoid platforms resolving `localhost` to IPv6 `::1`
  // which can cause connection-refused when services bind only to IPv4.
  apiUrl: 'http://127.0.0.1:3000/api',
  apiVersion: 'v1',
  multiTenant: {
    enabled: false,
    defaultTenant: 'default',
    tenantDetectionMode: 'subdomain', // 'subdomain' | 'domain' | 'path'
    tenantApiEndpoint: '/tenants'
  },
  whatsapp: {
    apiUrl: 'http://127.0.0.1:3000/api/whatsapp',
    webhookUrl: 'http://127.0.0.1:3000/webhooks/whatsapp',
    websocketUrl: 'ws://127.0.0.1:3000/ws/whatsapp',
    businessPhoneId: 'YOUR_BUSINESS_PHONE_ID', // Replace with actual WhatsApp Business Phone Number ID
    accessToken: 'YOUR_ACCESS_TOKEN' // Replace with actual WhatsApp Business API token
  }
};