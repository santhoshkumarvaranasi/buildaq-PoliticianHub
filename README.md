# PoliticianHub - Constituency Management Platform

A comprehensive digital platform for MLA/politician constituency management, built with Angular 21 and Angular Material.

## 🚀 Live Demo

**Production URL:** [https://politicianhub.buildaq.com/](https://politicianhub.buildaq.com/)

## 📋 Overview

PoliticianHub is a modern, feature-rich constituency management system designed to help politicians and their teams efficiently manage:

- **Grievance Management** - Track and resolve public complaints with SLA monitoring
- **Voter Database & Analytics** - Comprehensive voter demographics and engagement metrics
- **Development Works** - Monitor infrastructure projects and track progress
- **Volunteer Management** - Organize and track volunteer performance
- **Multi-Channel Communications** - SMS, WhatsApp, Voice, Email, and social media outreach
- **Feedback Collection** - Gather public feedback through 8+ channels
- **Reports & Insights** - Automated analytics and performance reports
- **Events Management** - Schedule and track constituency tours and public events

## 🛠️ Technology Stack

- **Framework:** Angular 21.0.0 (Standalone Components)
- **UI Library:** Angular Material 21.0.0
- **Styling:** SCSS with custom Material theme
- **Build System:** Angular esbuild
- **State Management:** Angular Signals
- **HTTP Client:** Angular HttpClient with interceptors
- **Deployment:** GitHub Pages with GitHub Actions CI/CD

## 🏃‍♂️ Development Setup

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Angular CLI 21.x

### Installation

```bash
# Clone the repository
git clone https://github.com/santhoshkumarvaranasi/buildaq-PoliticianHub.git
cd buildaq-PoliticianHub

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:4004/`

### Available Scripts

```bash
# Development server (port 4004)
npm start

# Production build
npm run build

# Run unit tests
npm test

# Watch mode for tests
npm run watch
```

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                    # Core services and interceptors
│   │   ├── components/
│   │   │   └── tenant-switcher/ # Constituency selector
│   │   └── services/
│   │       ├── api.service.ts
│   │       └── tenant.service.ts
│   ├── features/               # Feature modules
│   │   ├── grievances/         # Complaint management
│   │   ├── voters/             # Voter database & analytics
│   │   ├── works/              # Development projects
│   │   ├── volunteers/         # Volunteer management
│   │   ├── communications/     # Broadcast center
│   │   ├── feedback/           # Multi-channel feedback
│   │   ├── reports/            # Analytics & insights
│   │   ├── events/             # Event management
│   │   └── media/              # Social media management
│   └── politicianhub-dashboard/ # Main dashboard
├── environments/               # Environment configurations
└── styles/                     # Global styles & themes
```

## 🎨 Key Features

### Grievance Management
- Real-time status tracking
- Auto-refresh (30s intervals)
- SLA monitoring and alerts
- Bulk operations support
- Advanced filtering and search
- CSV export functionality

### Voter Analytics
- Demographics breakdown (age, gender, location)
- Booth-wise coverage tracking
- Sentiment analysis
- Engagement score calculation
- Visual charts and graphs

### Feedback Collection
- 8 integrated channels:
  - SMS Surveys
  - WhatsApp
  - Voice Calls
  - Mobile App
  - Booth Kiosks
  - QR Code Surveys
  - Email Campaigns
  - Web Portal
- Sentiment analysis
- Response tracking
- Campaign management

### Reports & Insights
- Real-time KPI dashboard
- Automated report generation
- Multiple export formats (PDF, Excel, CSV)
- Scheduled reports
- Custom report builder
- AI-powered insights

## 🚀 Deployment

### GitHub Pages (Automatic)

The project uses GitHub Actions for automatic deployment to GitHub Pages:

1. Push to `main` branch triggers the workflow
2. Build runs with production configuration
3. Output deployed to `gh-pages` branch
4. Site published at custom domain

### Manual Deployment

```bash
# Build for production
npm run build

# Output will be in dist/buildaq-schools/browser/
# Deploy the contents to your hosting provider
```

## 🔒 Security

- HTTP interceptor for authentication
- Environment-based configuration
- Secure API endpoints
- Role-based access control (planned)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Build Configuration

- **Bundle Budget:** 5MB initial, 100KB per component style
- **Output Hashing:** Enabled for production
- **Optimization:** Full optimization in production builds
- **Source Maps:** Enabled in development only

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software developed by BuildAQ.

## 👥 Authors

- **BuildAQ Team** - [BuildAQ](https://buildaq.com)

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Angular Team for the excellent framework
- Angular Material team for the UI components
- All contributors and testers

---

**Note:** This is an active development project. Features and documentation are continuously updated.
