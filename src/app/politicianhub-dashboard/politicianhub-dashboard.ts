import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TenantService, Tenant } from '../core/services/tenant.service';
import { MaterialModule } from '../core/material.module';
import { MockDataService } from '../core/services/mock-data.service';
import { ICONS } from './icons';

type Tone = 'blue' | 'teal' | 'gold' | 'coral' | 'violet' | 'slate';

interface MetricCard {
  label: string;
  value: string;
  meta: string;
  tone: 'ok' | 'warn' | 'info';
}

interface MvpModule {
  iconKey: keyof typeof ICONS;
  tone: Tone;
  title: string;
  summary: string;
  metric: string;
  checklist: string[];
  path: string;
}

interface RequestStage {
  stage: string;
  detail: string;
  eta: string;
  actions: string[];
}

interface FeaturePillar {
  iconKey: keyof typeof ICONS;
  title: string;
  summary: string;
  bullets: string[];
}

interface OperationalSuite {
  title: string;
  desc: string;
  bullets: string[];
}

interface DevelopmentWork {
  name: string;
  phase: string;
  progress: number;
  budget: string;
  eta: string;
  owner: string;
}

interface GrievanceTicket {
  ticket: string;
  citizen: string;
  ward: string;
  category: string;
  channel: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved';
  sla: string;
  submitted: string;
  attachments: number;
}

interface KillerFeature {
  title: string;
  detail: string;
  benefit: string;
}

@Component({
  selector: 'app-politicianhub-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './politicianhub-dashboard.html',
  styleUrl: './politicianhub-dashboard.scss'
})
export class PoliticianHubDashboardComponent implements OnInit {
  tenant: Tenant | null = null;
  isShell = window.location.pathname.startsWith('/schools');
  safeIcons: Record<string, SafeHtml> = {};

  quickLinks = [
    { label: 'Launch Grievance Desk', path: 'grievances' },
    { label: 'Import Voter List', path: 'voters/import' },
    { label: 'Add Work Order', path: 'works/new' },
    { label: 'Plan Broadcast', path: 'communications' },
    { label: 'Review Volunteers', path: 'volunteers' }
  ];

  heroHighlights = [
    'WhatsApp + app tickets auto-triaged',
    'Booth-level intelligence live',
    '360 deg view of every household'
  ];

  keyMetrics: MetricCard[] = [];
  mvpModules: MvpModule[] = [];
  requestJourney: RequestStage[] = [];
  featurePillars: FeaturePillar[] = [];
  operationalSuites: OperationalSuite[] = [];
  communicationsSuite: { title: string; metric: string; bullets: string[] }[] = [];
  volunteerNetwork: { level: string; count: number; focus: string }[] = [];
  voterSegments: { label: string; count: number; insight: string }[] = [];
  developmentWorks: DevelopmentWork[] = [];
  grievanceQueue: GrievanceTicket[] = [];
  killerFeatures: KillerFeature[] = [];
  aiPrompts: { prompt: string; result: string }[] = [];
  recommendations: { title: string; bullets: string[] }[] = [];
  heatmapStats = { redZones: 0, resolvedPercent: 0, summary: '' };
  whatsappStats = { enabledWards: 0, autoTickets: 0, adoption: '' };
  knowledgeGraphSummary = '';
  nextBestActions: string[] = [];
  upcomingTours: { title: string; date: string; location: string; followUp: string }[] = [];
  influencerNotes: { name: string; booth: string; focus: string }[] = [];

  constructor(
    private tenantService: TenantService,
    private mock: MockDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.tenant = this.tenantService.getCurrentTenant();
    this.safeIcons = Object.fromEntries(
      Object.entries(ICONS).map(([key, value]) => [
        key,
        this.sanitizer.bypassSecurityTrustHtml(value)
      ])
    );
    this.seedDashboard();
  }

  getLink(path: string) {
    return this.isShell ? `/schools/${path}` : `/${path}`;
  }

  private seedDashboard() {
    this.buildKeyMetrics();
    this.buildMvpModules();
    this.buildJourney();
    this.buildFeatureMatrix();
    this.buildOperationalSuites();
    this.buildCommsAndVolunteers();
    this.buildDevelopmentView();
    this.buildGrievanceQueue();
    this.buildNarratives();
  }

  private buildKeyMetrics() {
    const grievancesOpen = 128;
    const households = 42180;
    const worksActive = 63;
    const volunteersActive = 412;

    this.keyMetrics = [
      {
        label: 'Open grievances',
        value: grievancesOpen.toString(),
        meta: '18 escalated | SLA risk in 4 wards',
        tone: 'warn'
      },
      {
        label: 'Households tracked',
        value: households.toLocaleString(),
        meta: '72% tagged (seniors, influencers, govt staff)',
        tone: 'ok'
      },
      {
        label: 'Works in execution',
        value: worksActive.toString(),
        meta: 'Rs 48.2 Cr currently on ground',
        tone: 'info'
      },
      {
        label: 'Volunteers active this week',
        value: volunteersActive.toString(),
        meta: '28 wards submitted attendance',
        tone: 'info'
      }
    ];
  }

  private buildMvpModules() {
    this.mvpModules = [
      {
        iconKey: 'grievances',
        tone: 'blue',
        title: 'Public Grievance Desk',
        summary: 'Tickets from app, WhatsApp or helpdesk auto-assign to ward leads with SLA clocks.',
        metric: '128 live | 14 resolved today',
        checklist: ['Category routing', 'Geo-tag + before/after photos', 'Escalation nudges every 6 hrs'],
        path: 'grievances'
      },
      {
        iconKey: 'database',
        tone: 'teal',
        title: 'Constituency & Voter Database',
        summary: 'Import EPIC data, stitch families, tag influencers or govt staff in one graph.',
        metric: '42,180 voters | 5,920 families',
        checklist: ['Street -> booth -> ward hierarchy', 'Custom tags (dialysis, pension)', 'Visit + survey logs'],
        path: 'voters'
      },
      {
        iconKey: 'works',
        tone: 'gold',
        title: 'Development Works Tracker',
        summary: 'Track sanction -> tender -> execution with budgets, contractors and evidence.',
        metric: '63 projects | 14 delayed',
        checklist: ['Progress %, budgets, blockers', 'Photo timeline & drone links', 'Auto alerts when SLAs slip'],
        path: 'works'
      }
    ];
  }

  private buildJourney() {
    this.requestJourney = [
      {
        stage: 'Capture',
        detail: 'Citizen raises a ticket via WhatsApp bot, mobile app or helpdesk kiosk.',
        eta: 'Instant',
        actions: ['Ticket id + geo pin auto-generated', 'Priority derived from templates', 'Dedup against knowledge base']
      },
      {
        stage: 'Assign & Engage',
        detail: 'Ward volunteer or official gets the task in the team app.',
        eta: '< 5 mins',
        actions: ['SLA clock starts', 'Citizen receives acknowledgement link', 'Escalation ladder visible']
      },
      {
        stage: 'Resolve & Validate',
        detail: 'Volunteer uploads before/after photos, officer closes ticket, citizen notified.',
        eta: 'Within SLA',
        actions: ['Quality checklist enforced', 'Evidence archived for PR', 'Citizen rating fuels volunteer score']
      },
      {
        stage: 'Insight Loop',
        detail: 'Issue trends power ward visits and budget asks.',
        eta: 'Daily',
        actions: ['Heatmap updated', 'AI suggests wards needing visit tomorrow', 'Auto brief prepared for MLA']
      }
    ];
  }

  private buildFeatureMatrix() {
    this.featurePillars = [
      {
        iconKey: 'broadcast',
        title: 'Communication & Broadcast',
        summary: 'Structured outreach from MLA office.',
        bullets: ['Bulk SMS + WhatsApp + voice', 'Ward newsletters and media pushes', 'Festival greeting automation']
      },
      {
        iconKey: 'volunteers',
        title: 'Volunteer & Team Stack',
        summary: 'Ward -> booth -> street hierarchy with activity tracking.',
        bullets: ['Task assignment and attendance', 'Performance badges and rewards', 'Coverage heatmap per booth']
      },
      {
        iconKey: 'tour',
        title: 'Meetings, Events & Tours',
        summary: 'Full visibility into MLA schedule and follow-ups.',
        bullets: ['Tour plan + convoy logistics', 'Meeting notes to task tracker', 'Ward visit readiness score']
      },
      {
        iconKey: 'heatmap',
        title: 'Complaint Heatmap (GIS)',
        summary: 'Map red vs green zones for press briefings.',
        bullets: ['Layer filters by category/SLA', 'Shareable embeddable maps', 'AI recommends PR ready snapshots']
      },
      {
        iconKey: 'appointment',
        title: 'Digital Chamber',
        summary: 'People book MLA appointments with priority logic.',
        bullets: ['Token system with SMS updates', 'Emergency fast-track rules', 'Sync with tour calendar']
      },
      {
        iconKey: 'media',
        title: 'Media & Social Desk',
        summary: 'Publish approved creatives everywhere.',
        bullets: ['Auto post + approval flows', 'Sentiment dashboard', 'Weekly analytics and talking points']
      }
    ];
  }

  private buildOperationalSuites() {
    this.operationalSuites = [
      {
        title: 'Schemes & Welfare Assistance',
        desc: 'Single view across CM Relief Fund, Aarogyasri/YSR, pensions, housing and scholarships.',
        bullets: ['Eligibility calculator + checklist', 'Track applicants, owner, stage', 'Bulk notify families when window opens']
      },
      {
        title: 'Election Management',
        desc: 'Booth planning engine for campaign season.',
        bullets: ['Predict turnout and gap voters', 'WhatsApp group coverage per booth', 'Campaign route planner with rosters']
      },
      {
        title: 'Feedback, Surveys & Polls',
        desc: 'Micro pulse surveys, star ratings and sentiment tracking.',
        bullets: ['Localized polling widgets', 'Survey to ticket conversion', 'Shareable MLA scorecards']
      },
      {
        title: 'CSR & Donation Tracking',
        desc: 'Maintain donor list, CSR spends and utilization heatmap.',
        bullets: ['Auto transparency reports', 'Map CSR projects with photos', 'Alert when pledge vs spend gap widens']
      },
      {
        title: 'Emergency Response Desk',
        desc: 'Medical, fire or flood requests monitored live.',
        bullets: ['Volunteer mobilization board', 'Control room live status', 'Post event debrief templates']
      },
      {
        title: 'Analytics HQ',
        desc: 'High level insights and popularity metrics.',
        bullets: ['Top issues per ward', 'Budget utilization vs sanction', 'Team performance leaderboard']
      }
    ];
  }

  private buildCommsAndVolunteers() {
    this.communicationsSuite = [
      {
        title: 'Broadcast Center',
        metric: '18 wards reached this week',
        bullets: ['Bulk SMS packs (vernacular templates)', 'WhatsApp broadcasts with compliance guardrails', 'Voice calls powered by text to speech']
      },
      {
        title: 'Content Studio',
        metric: '12 videos scheduled',
        bullets: ['Event announcements auto post', 'Monthly ward newsletter generator', 'Video and podcast integration']
      }
    ];

    this.volunteerNetwork = [
      { level: 'Ward Leads', count: 32, focus: 'Drive grievance SLAs and volunteer rosters' },
      { level: 'Booth Captains', count: 214, focus: 'Collect booth sentiment, manage WhatsApp groups' },
      { level: 'Street Volunteers', count: 1180, focus: 'Household visits, surveys, evidence uploads' }
    ];

    this.voterSegments = [
      { label: 'Senior citizens', count: 6120, insight: 'Need medical and pension camps' },
      { label: 'Government staff', count: 820, insight: 'High influence, needs discreet check-ins' },
      { label: 'Youth first time voters', count: 5100, insight: 'College outreach + job fairs' },
      { label: 'Swing families', count: 1380, insight: 'Revisit pending before Sankranthi' }
    ];
  }

  private buildDevelopmentView() {
    this.developmentWorks = [
      {
        name: 'Ward 22 BT Road relaying',
        phase: 'Execution',
        progress: 64,
        budget: 'Rs 1.8 Cr',
        eta: '12 Dec',
        owner: 'Infra Dept | Praveen'
      },
      {
        name: 'Drinking water line upgrade',
        phase: 'Tender',
        progress: 32,
        budget: 'Rs 2.4 Cr',
        eta: 'Work order due 8 Dec',
        owner: 'Water Board | Ashima'
      },
      {
        name: 'Anganwadi refurb (Ward 11)',
        phase: 'Snag list',
        progress: 88,
        budget: 'Rs 48 L',
        eta: 'Handover 04 Dec',
        owner: 'Women & Child Dept | Latha'
      }
    ];

    const events = (this.mock.getEvents?.() || []).slice(0, 3);
    this.upcomingTours = events.map(ev => ({
      title: ev.title,
      date: ev.date,
      location: ev.location || 'Constituency',
      followUp: 'Assign volunteer recap'
    }));
  }

  private buildGrievanceQueue() {
    this.grievanceQueue = [
      {
        ticket: '#GRV-2184',
        citizen: 'R. Latha',
        ward: '18',
        category: 'Water - burst pipeline',
        channel: 'WhatsApp',
        priority: 'High',
        status: 'Open',
        sla: '4h left',
        submitted: 'Today | 09:12 AM',
        attachments: 3
      },
      {
        ticket: '#GRV-2140',
        citizen: 'Syed Imran',
        ward: '07',
        category: 'Road - potholes',
        channel: 'Volunteer app',
        priority: 'Medium',
        status: 'In Progress',
        sla: '8h left',
        submitted: 'Yesterday | 06:05 PM',
        attachments: 2
      },
      {
        ticket: '#GRV-2093',
        citizen: 'Mary Thomas',
        ward: '03',
        category: 'Pension - pending',
        channel: 'Call center',
        priority: 'High',
        status: 'Open',
        sla: '2h left',
        submitted: 'Today | 08:05 AM',
        attachments: 1
      },
      {
        ticket: '#GRV-2055',
        citizen: 'Venu Reddy',
        ward: '24',
        category: 'Electricity - transformer',
        channel: 'Kiosk',
        priority: 'Low',
        status: 'Resolved',
        sla: 'Closed on time',
        submitted: '02 Dec',
        attachments: 4
      }
    ];
  }

  private buildNarratives() {
    this.killerFeatures = [
      {
        title: 'Booth Performance Intelligence',
        detail: 'Predict strong or weak booths with turnout, grievance and volunteer data blended.',
        benefit: 'Suggests focus booths plus ready talking points.'
      },
      {
        title: 'AI Chat Assistant',
        detail: 'Ask natural questions such as "Show me top unresolved issues in ward 18".',
        benefit: 'Produces instant command sheets for MLA teams.'
      },
      {
        title: 'WhatsApp Ticket System',
        detail: 'Citizens message once and tickets auto-create, tag and route.',
        benefit: 'Zero training for public and updates stay in the chat thread.'
      },
      {
        title: 'Constituency Knowledge Graph',
        detail: 'Links person -> family -> street -> booth -> ward -> issues.',
        benefit: 'Helps teams understand influence chains and avoid duplicate outreach.'
      }
    ];

    this.aiPrompts = [
      { prompt: 'Which wards need my visit tomorrow?', result: 'Wards 18, 7 and 3 based on SLA breaches plus influencer birthdays.' },
      { prompt: 'Find top volunteers in Booth 54', result: 'Lavanya (18 tasks, 4.8 stars) and Naresh (14 tasks, 4.6 stars).' },
      { prompt: 'Show welfare applicants pending documents', result: '32 Aarogyasri and 18 widow pensions need income proof follow-up.' }
    ];

    this.recommendations = [
      {
        title: 'Quick Start MVP (week 1)',
        bullets: ['Launch grievance desk plus WhatsApp bot', 'Import voter/EPIC data and tag influencers', 'Onboard works and upload baseline photos']
      },
      {
        title: 'Phase 2 (week 3-4)',
        bullets: ['Activate volunteer hierarchy and attendance', 'Roll out broadcast center with approvals', 'Publish analytics dashboard to MLA core team']
      }
    ];

    this.heatmapStats = {
      redZones: 6,
      resolvedPercent: 68,
      summary: 'Ward 18 and 7 drive 42% of open tickets; Ward 22 fully green.'
    };

    this.whatsappStats = {
      enabledWards: 21,
      autoTickets: 64,
      adoption: '42% of citizens now prefer WhatsApp for complaints.'
    };

    this.knowledgeGraphSummary =
      'Every citizen, family and volunteer is mapped to street -> booth -> ward. Issues link to the same nodes so influencers get nudges.';

    this.nextBestActions = [
      'Push notification for Ward 7 pothole drive',
      'Schedule MLA tour stop at Ward 18 water point',
      'Send scheme checklist SMS to pending Aarogyasri applicants'
    ];

    this.influencerNotes = [
      { name: 'Shobha Rao', booth: '18-04', focus: 'Needs drainage work update before community meet' },
      { name: 'Mohammed Pasha', booth: '07-02', focus: 'Runs auto WhatsApp group and wants festival invites' }
    ];
  }
}
