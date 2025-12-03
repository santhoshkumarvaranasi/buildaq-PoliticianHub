export const environment = {
  production: true,
  apiUrl: 'https://api.buildaq.com/schools/api', // Update with your production API URL
  apiVersion: 'v1',
  multiTenant: {
    enabled: true,
    defaultTenant: 'demo',
    tenantDetectionMode: 'subdomain', // 'subdomain' | 'domain' | 'path'
    tenantApiEndpoint: '/tenants'
  },
  whatsapp: {
    apiUrl: 'https://api.buildaq.com/api/whatsapp',
    webhookUrl: 'https://api.buildaq.com/webhooks/whatsapp',
    websocketUrl: 'wss://api.buildaq.com/ws/whatsapp',
    businessPhoneId: '', // Configure in deployment
    accessToken: '' // Configure in deployment
  },
  auth: {
    clientId: 'schools-management-app',
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Update with your Azure AD tenant
    redirectUri: 'https://schools.buildaq.com/auth/callback',
    postLogoutRedirectUri: 'https://schools.buildaq.com/',
    scopes: ['openid', 'profile', 'email']
  },
  cors: {
    allowedOrigins: ['https://schools.buildaq.com', 'https://shell.buildaq.com'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Tenant-ID']
  },
  features: {
    enableAnalytics: true,
    enableLogging: true,
    enablePerformanceMonitoring: true
  }
};