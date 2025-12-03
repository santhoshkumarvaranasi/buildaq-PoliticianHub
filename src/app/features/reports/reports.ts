import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';

interface Report {
  id: string;
  name: string;
  category: string;
  description: string;
  lastGenerated?: Date;
  frequency: string;
  status: 'ready' | 'generating' | 'scheduled';
}

interface KPI {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: string;
  color: string;
}

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  template: `
    <div class="reports-container">
      <!-- Header -->
      <div class="page-header">
        <div class="header-content">
          <div class="title-section">
            <span class="eyebrow">PoliticianHub</span>
            <h1>Reports & Insights</h1>
            <p class="subtitle">Comprehensive analytics and performance reports</p>
          </div>
          <div class="header-actions">
            <button mat-raised-button color="primary" (click)="generateCustomReport()">
              <mat-icon>add_chart</mat-icon>
              Custom Report
            </button>
            <button mat-raised-button (click)="exportAllData()">
              <mat-icon>download</mat-icon>
              Export All
            </button>
          </div>
        </div>
      </div>

      <!-- KPI Overview -->
      <div class="kpi-grid">
        <div class="kpi-card" *ngFor="let kpi of kpis()">
          <div class="kpi-header">
            <mat-icon [style.color]="kpi.color">{{ kpi.icon }}</mat-icon>
            <span class="kpi-label">{{ kpi.label }}</span>
          </div>
          <div class="kpi-value">{{ kpi.value }}</div>
          <div class="kpi-change" [class.positive]="kpi.trend === 'up'" [class.negative]="kpi.trend === 'down'">
            <mat-icon>{{ kpi.trend === 'up' ? 'trending_up' : kpi.trend === 'down' ? 'trending_down' : 'trending_flat' }}</mat-icon>
            <span>{{ kpi.change > 0 ? '+' : '' }}{{ kpi.change }}%</span>
            <span class="period">vs last month</span>
          </div>
        </div>
      </div>

      <!-- Quick Filters -->
      <div class="filters-section">
        <mat-form-field appearance="outline">
          <mat-label>Time Period</mat-label>
          <mat-select [(ngModel)]="selectedPeriod" (selectionChange)="applyFilters()">
            <mat-option value="today">Today</mat-option>
            <mat-option value="week">This Week</mat-option>
            <mat-option value="month">This Month</mat-option>
            <mat-option value="quarter">This Quarter</mat-option>
            <mat-option value="year">This Year</mat-option>
            <mat-option value="custom">Custom Range</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Category</mat-label>
          <mat-select [(ngModel)]="selectedCategory" (selectionChange)="applyFilters()">
            <mat-option value="all">All Categories</mat-option>
            <mat-option value="constituency">Constituency</mat-option>
            <mat-option value="voter">Voter Analytics</mat-option>
            <mat-option value="grievance">Grievances</mat-option>
            <mat-option value="works">Development Works</mat-option>
            <mat-option value="volunteer">Volunteers</mat-option>
            <mat-option value="communication">Communications</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Search Reports</mat-label>
          <input matInput [(ngModel)]="searchQuery" (ngModelChange)="applyFilters()" placeholder="Search by name...">
          <mat-icon matPrefix>search</mat-icon>
        </mat-form-field>
      </div>

      <!-- Analytics Dashboard -->
      <div class="analytics-section">
        <h2>Performance Analytics</h2>
        
        <div class="charts-grid">
          <!-- Grievance Resolution Chart -->
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Grievance Resolution Trends</mat-card-title>
              <button mat-icon-button [matMenuTriggerFor]="grievanceMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #grievanceMenu="matMenu">
                <button mat-menu-item (click)="exportChart('grievance')">
                  <mat-icon>download</mat-icon>
                  Export Chart
                </button>
                <button mat-menu-item>
                  <mat-icon>settings</mat-icon>
                  Configure
                </button>
              </mat-menu>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-container">
                <div class="bar-chart">
                  <div class="bar-item" *ngFor="let item of grievanceData()">
                    <div class="bar-wrapper">
                      <div class="bar" [style.height.%]="(item.value / getMaxValue(grievanceData())) * 100" [style.background]="item.color"></div>
                    </div>
                    <span class="bar-label">{{ item.label }}</span>
                    <span class="bar-value">{{ item.value }}</span>
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Voter Engagement Chart -->
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Voter Engagement Score</mat-card-title>
              <button mat-icon-button [matMenuTriggerFor]="voterMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #voterMenu="matMenu">
                <button mat-menu-item (click)="exportChart('voter')">
                  <mat-icon>download</mat-icon>
                  Export Chart
                </button>
              </mat-menu>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-container">
                <div class="line-chart">
                  <div class="line-item" *ngFor="let item of voterEngagementData(); let i = index">
                    <div class="line-point" [style.bottom.%]="(item.value / 100) * 80">
                      <span class="point-value">{{ item.value }}%</span>
                    </div>
                    <span class="line-label">{{ item.label }}</span>
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Budget Utilization -->
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Budget Utilization</mat-card-title>
              <button mat-icon-button [matMenuTriggerFor]="budgetMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #budgetMenu="matMenu">
                <button mat-menu-item (click)="exportChart('budget')">
                  <mat-icon>download</mat-icon>
                  Export Chart
                </button>
              </mat-menu>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-container">
                <div class="progress-list">
                  <div class="progress-item" *ngFor="let item of budgetData()">
                    <div class="progress-header">
                      <span class="progress-label">{{ item.label }}</span>
                      <span class="progress-value">{{ item.value }}%</span>
                    </div>
                    <mat-progress-bar mode="determinate" [value]="item.value" [color]="item.value > 80 ? 'warn' : 'primary'"></mat-progress-bar>
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Geographic Distribution -->
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Area-wise Distribution</mat-card-title>
              <button mat-icon-button [matMenuTriggerFor]="geoMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #geoMenu="matMenu">
                <button mat-menu-item (click)="exportChart('geographic')">
                  <mat-icon>download</mat-icon>
                  Export Chart
                </button>
              </mat-menu>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-container">
                <div class="pie-chart">
                  <div class="pie-legend">
                    <div class="legend-item" *ngFor="let item of geographicData()">
                      <span class="legend-color" [style.background]="item.color"></span>
                      <span class="legend-label">{{ item.label }}</span>
                      <span class="legend-value">{{ item.value }}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <!-- Available Reports -->
      <div class="reports-section">
        <h2>Available Reports</h2>
        
        <div class="reports-grid">
          <mat-card class="report-card" *ngFor="let report of filteredReports()">
            <mat-card-header>
              <mat-icon mat-card-avatar [color]="report.status === 'ready' ? 'primary' : 'accent'">
                {{ getReportIcon(report.category) }}
              </mat-icon>
              <mat-card-title>{{ report.name }}</mat-card-title>
              <mat-card-subtitle>{{ report.category }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p class="report-description">{{ report.description }}</p>
              <div class="report-meta">
                <span class="meta-item">
                  <mat-icon>schedule</mat-icon>
                  {{ report.frequency }}
                </span>
                <span class="meta-item" *ngIf="report.lastGenerated">
                  <mat-icon>update</mat-icon>
                  {{ formatDate(report.lastGenerated) }}
                </span>
              </div>
              <mat-chip-set>
                <mat-chip [class]="'status-' + report.status">
                  {{ report.status }}
                </mat-chip>
              </mat-chip-set>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary" (click)="generateReport(report)">
                <mat-icon>play_arrow</mat-icon>
                Generate
              </button>
              <button mat-button (click)="viewReport(report)">
                <mat-icon>visibility</mat-icon>
                View
              </button>
              <button mat-button (click)="scheduleReport(report)">
                <mat-icon>schedule_send</mat-icon>
                Schedule
              </button>
              <button mat-icon-button [matMenuTriggerFor]="reportMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #reportMenu="matMenu">
                <button mat-menu-item (click)="downloadReport(report, 'pdf')">
                  <mat-icon>picture_as_pdf</mat-icon>
                  Download PDF
                </button>
                <button mat-menu-item (click)="downloadReport(report, 'excel')">
                  <mat-icon>table_chart</mat-icon>
                  Download Excel
                </button>
                <button mat-menu-item (click)="downloadReport(report, 'csv')">
                  <mat-icon>description</mat-icon>
                  Download CSV
                </button>
                <button mat-menu-item (click)="shareReport(report)">
                  <mat-icon>share</mat-icon>
                  Share
                </button>
              </mat-menu>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>

      <!-- Automated Insights -->
      <div class="insights-section">
        <h2>Automated Insights</h2>
        <div class="insights-grid">
          <mat-card class="insight-card" *ngFor="let insight of insights()">
            <div class="insight-icon" [style.background]="insight.severity === 'critical' ? '#f44336' : insight.severity === 'warning' ? '#ff9800' : '#4caf50'">
              <mat-icon>{{ insight.icon }}</mat-icon>
            </div>
            <div class="insight-content">
              <h3>{{ insight.title }}</h3>
              <p>{{ insight.message }}</p>
              <button mat-button color="primary" (click)="viewInsightDetails(insight)">
                View Details
                <mat-icon>arrow_forward</mat-icon>
              </button>
            </div>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports.scss']
})
export class ReportsComponent {
  selectedPeriod = 'month';
  selectedCategory = 'all';
  searchQuery = '';

  kpis = signal<KPI[]>([
    { label: 'Total Grievances', value: '1,247', change: 12, trend: 'up', icon: 'report_problem', color: '#2196f3' },
    { label: 'Resolution Rate', value: '87%', change: 5, trend: 'up', icon: 'check_circle', color: '#4caf50' },
    { label: 'Voter Engagement', value: '76%', change: -3, trend: 'down', icon: 'people', color: '#ff9800' },
    { label: 'Works Completed', value: '23', change: 8, trend: 'up', icon: 'construction', color: '#9c27b0' },
    { label: 'Active Volunteers', value: '156', change: 15, trend: 'up', icon: 'volunteer_activism', color: '#00bcd4' },
    { label: 'Budget Utilization', value: '72%', change: 4, trend: 'up', icon: 'account_balance', color: '#f44336' }
  ]);

  reports = signal<Report[]>([
    {
      id: '1',
      name: 'Constituency Performance Report',
      category: 'Constituency',
      description: 'Comprehensive overview of constituency performance metrics and KPIs',
      lastGenerated: new Date(2025, 11, 1),
      frequency: 'Monthly',
      status: 'ready'
    },
    {
      id: '2',
      name: 'Grievance Analytics Report',
      category: 'Grievances',
      description: 'Detailed analysis of grievance trends, resolution times, and satisfaction scores',
      lastGenerated: new Date(2025, 11, 1),
      frequency: 'Weekly',
      status: 'ready'
    },
    {
      id: '3',
      name: 'Voter Demographics & Trends',
      category: 'Voter Analytics',
      description: 'Analysis of voter base demographics, engagement patterns, and sentiment analysis',
      frequency: 'Monthly',
      status: 'generating'
    },
    {
      id: '4',
      name: 'Development Works Progress',
      category: 'Works',
      description: 'Status update on all ongoing and completed development projects',
      lastGenerated: new Date(2025, 10, 28),
      frequency: 'Bi-weekly',
      status: 'ready'
    },
    {
      id: '5',
      name: 'Volunteer Performance Report',
      category: 'Volunteers',
      description: 'Volunteer activity metrics, performance ratings, and contribution analysis',
      frequency: 'Monthly',
      status: 'scheduled'
    },
    {
      id: '6',
      name: 'Communication Effectiveness',
      category: 'Communications',
      description: 'Analysis of communication campaigns, reach, engagement, and conversion metrics',
      lastGenerated: new Date(2025, 11, 1),
      frequency: 'Weekly',
      status: 'ready'
    },
    {
      id: '7',
      name: 'Budget Allocation Report',
      category: 'Finance',
      description: 'Breakdown of budget allocation, spending patterns, and financial projections',
      frequency: 'Monthly',
      status: 'ready'
    },
    {
      id: '8',
      name: 'Event Impact Analysis',
      category: 'Events',
      description: 'Post-event analysis including attendance, feedback, and impact assessment',
      frequency: 'Per Event',
      status: 'ready'
    }
  ]);

  grievanceData = signal<ChartData[]>([
    { label: 'Mon', value: 45, color: '#2196f3' },
    { label: 'Tue', value: 62, color: '#2196f3' },
    { label: 'Wed', value: 38, color: '#2196f3' },
    { label: 'Thu', value: 71, color: '#2196f3' },
    { label: 'Fri', value: 55, color: '#2196f3' },
    { label: 'Sat', value: 48, color: '#2196f3' },
    { label: 'Sun', value: 29, color: '#2196f3' }
  ]);

  voterEngagementData = signal<ChartData[]>([
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 68 },
    { label: 'Mar', value: 71 },
    { label: 'Apr', value: 69 },
    { label: 'May', value: 74 },
    { label: 'Jun', value: 76 }
  ]);

  budgetData = signal<ChartData[]>([
    { label: 'Infrastructure', value: 85 },
    { label: 'Healthcare', value: 72 },
    { label: 'Education', value: 68 },
    { label: 'Welfare Schemes', value: 91 },
    { label: 'Administration', value: 45 }
  ]);

  geographicData = signal<ChartData[]>([
    { label: 'North Zone', value: 28, color: '#2196f3' },
    { label: 'South Zone', value: 22, color: '#4caf50' },
    { label: 'East Zone', value: 25, color: '#ff9800' },
    { label: 'West Zone', value: 25, color: '#9c27b0' }
  ]);

  insights = signal([
    {
      id: '1',
      icon: 'warning',
      severity: 'warning',
      title: 'Pending Grievances Spike',
      message: '23% increase in pending grievances in Ward 5. Immediate action recommended.'
    },
    {
      id: '2',
      icon: 'trending_up',
      severity: 'success',
      title: 'Voter Engagement Improving',
      message: 'Voter engagement up 15% this month. Communication strategies are working effectively.'
    },
    {
      id: '3',
      icon: 'error',
      severity: 'critical',
      title: 'Budget Overrun Alert',
      message: 'Infrastructure project in Sector B is 12% over budget. Review required.'
    },
    {
      id: '4',
      icon: 'info',
      severity: 'info',
      title: 'High Volunteer Activity',
      message: 'Volunteer participation increased by 28% this week. Consider scaling programs.'
    }
  ]);

  filteredReports = signal<Report[]>(this.reports());

  applyFilters() {
    let filtered = this.reports();

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(r => 
        r.category.toLowerCase().includes(this.selectedCategory.toLowerCase())
      );
    }

    if (this.searchQuery) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredReports.set(filtered);
  }

  getMaxValue(data: ChartData[]): number {
    return Math.max(...data.map(d => d.value));
  }

  getReportIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Constituency': 'dashboard',
      'Grievances': 'report_problem',
      'Voter Analytics': 'people',
      'Works': 'construction',
      'Volunteers': 'volunteer_activism',
      'Communications': 'campaign',
      'Finance': 'account_balance',
      'Events': 'event'
    };
    return icons[category] || 'description';
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  }

  generateReport(report: Report) {
    console.log('Generating report:', report.name);
    // Simulate report generation
    alert(`Generating ${report.name}...`);
  }

  viewReport(report: Report) {
    console.log('Viewing report:', report.name);
    alert(`Opening ${report.name}...`);
  }

  scheduleReport(report: Report) {
    console.log('Scheduling report:', report.name);
    alert(`Schedule ${report.name} for automated generation`);
  }

  downloadReport(report: Report, format: string) {
    console.log(`Downloading ${report.name} as ${format}`);
    alert(`Downloading ${report.name} as ${format.toUpperCase()}...`);
  }

  shareReport(report: Report) {
    console.log('Sharing report:', report.name);
    alert(`Share ${report.name} via email or messaging`);
  }

  generateCustomReport() {
    alert('Create a custom report with selected metrics and date ranges');
  }

  exportAllData() {
    alert('Exporting all data to Excel workbook with multiple sheets');
  }

  exportChart(chartType: string) {
    console.log('Exporting chart:', chartType);
    alert(`Exporting ${chartType} chart as PNG...`);
  }

  viewInsightDetails(insight: any) {
    console.log('Viewing insight:', insight.title);
    alert(`${insight.title}\n\n${insight.message}\n\nClick for detailed analysis and recommendations.`);
  }
}
