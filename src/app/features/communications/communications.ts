import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material.module';

@Component({
  selector: 'app-communications',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1>Broadcast Center</h1>
          <p class="subtitle">Manage SMS, WhatsApp, and voice campaigns with approval workflows</p>
        </div>
        <button mat-raised-button color="primary">
          <mat-icon>campaign</mat-icon>
          New Broadcast
        </button>
      </div>

      <div class="stats-grid">
        <mat-card class="stat-card"><div class="stat-label">This Month</div><div class="stat-value">18</div><div class="stat-meta">campaigns sent</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Reach</div><div class="stat-value">28K</div><div class="stat-meta">people reached</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Engagement</div><div class="stat-value">64%</div><div class="stat-meta">avg read rate</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Pending</div><div class="stat-value">3</div><div class="stat-meta">awaiting approval</div></mat-card>
      </div>

      <mat-card class="channels-card">
        <h3>Communication Channels</h3>
        <div class="channel-row" *ngFor="let channel of channels">
          <mat-icon [style.color]="channel.color">{{ channel.icon }}</mat-icon>
          <div class="channel-info">
            <strong>{{ channel.name }}</strong>
            <p>{{ channel.description }}</p>
          </div>
          <button mat-stroked-button color="primary">Configure</button>
        </div>
      </mat-card>

      <mat-card class="table-card">
        <h3 style="padding: 16px 16px 0;">Recent Campaigns</h3>
        <table mat-table [dataSource]="campaigns" class="campaigns-table">
          <ng-container matColumnDef="title">
            <th mat-header-cell *matHeaderCellDef>Campaign</th>
            <td mat-cell *matCellDef="let camp"><strong>{{ camp.title }}</strong><br><small>{{ camp.message }}</small></td>
          </ng-container>

          <ng-container matColumnDef="channel">
            <th mat-header-cell *matHeaderCellDef>Channel</th>
            <td mat-cell *matCellDef="let camp"><mat-chip>{{ camp.channel }}</mat-chip></td>
          </ng-container>

          <ng-container matColumnDef="audience">
            <th mat-header-cell *matHeaderCellDef>Audience</th>
            <td mat-cell *matCellDef="let camp">{{ camp.audience }}</td>
          </ng-container>

          <ng-container matColumnDef="sent">
            <th mat-header-cell *matHeaderCellDef>Sent</th>
            <td mat-cell *matCellDef="let camp">{{ camp.sent | number }}</td>
          </ng-container>

          <ng-container matColumnDef="delivered">
            <th mat-header-cell *matHeaderCellDef>Delivered</th>
            <td mat-cell *matCellDef="let camp">{{ camp.delivered }}%</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let camp"><mat-chip [color]="getStatusColor(camp.status)">{{ camp.status }}</mat-chip></td>
          </ng-container>

          <ng-container matColumnDef="date">
            <th mat-header-cell *matHeaderCellDef>Date</th>
            <td mat-cell *matCellDef="let camp">{{ camp.date }}</td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let camp">
              <button mat-icon-button><mat-icon>more_vert</mat-icon></button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card>
    </div>
  `,
  styles: [`
    .page-container { padding: 24px; max-width: 1400px; margin: 0 auto; }
    .page-header { margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; }
    .page-header h1 { margin: 0 0 8px 0; font-size: 28px; font-weight: 600; }
    .subtitle { margin: 0; color: rgba(0, 0, 0, 0.6); }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-card { padding: 16px; text-align: center; background: white; }
    .stat-label { font-size: 12px; color: #666; text-transform: uppercase; margin-bottom: 8px; font-weight: 500; }
    .stat-value { font-size: 32px; font-weight: 700; color: #1976d2; }
    .stat-meta { font-size: 11px; color: #888; margin-top: 4px; }
    .channels-card { padding: 24px; margin-bottom: 24px; }
    .channels-card h3 { margin: 0 0 20px 0; }
    .channel-row { display: flex; gap: 16px; align-items: center; padding: 16px; border-bottom: 1px solid #eee; }
    .channel-row:last-child { border-bottom: none; }
    .channel-row mat-icon { font-size: 32px; width: 32px; height: 32px; }
    .channel-info { flex: 1; }
    .channel-info p { margin: 4px 0 0 0; color: rgba(0, 0, 0, 0.6); font-size: 13px; }
    .table-card { padding: 0; overflow: auto; }
    .campaigns-table { width: 100%; }
    .campaigns-table th { font-weight: 600; background: #f5f5f5; padding: 12px 16px; }
    .campaigns-table td { padding: 12px 16px; }
    small { color: rgba(0, 0, 0, 0.6); font-size: 11px; }
  `]
})
export class CommunicationsComponent {
  channels = [
    { name: 'Bulk SMS', icon: 'sms', color: '#4caf50', description: 'Regional language templates, delivery tracking' },
    { name: 'WhatsApp Broadcasts', icon: 'chat', color: '#25D366', description: 'Compliance-ready broadcasts with media' },
    { name: 'Voice Calls', icon: 'phone', color: '#ff9800', description: 'Text-to-speech in vernacular languages' }
  ];

  campaigns = [
    { title: 'Sankranthi Greetings', message: 'Festival wishes to all wards', channel: 'WhatsApp', audience: 'All Voters', sent: 42180, delivered: 96, status: 'Completed', date: '2025-11-28' },
    { title: 'Water Supply Update', message: 'New pipeline work schedule', channel: 'SMS', audience: 'Ward 18,22', sent: 8420, delivered: 94, status: 'Completed', date: '2025-11-30' },
    { title: 'Health Camp Invitation', message: 'Free medical checkup Dec 5', channel: 'Voice', audience: 'Senior Citizens', sent: 6120, delivered: 88, status: 'In Progress', date: '2025-12-01' }
  ];

  displayedColumns = ['title', 'channel', 'audience', 'sent', 'delivered', 'status', 'date', 'actions'];

  getStatusColor(status: string): string {
    return status === 'Completed' ? 'primary' : status === 'In Progress' ? 'accent' : '';
  }
}
