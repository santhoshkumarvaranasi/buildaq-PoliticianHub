import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material.module';

interface DevelopmentWork {
  id: string;
  name: string;
  category: string;
  ward: string;
  phase: 'Planning' | 'Tender' | 'Execution' | 'Completion' | 'Delayed';
  progress: number;
  budget: string;
  sanctioned: string;
  spent: string;
  startDate: string;
  targetDate: string;
  contractor?: string;
  status: 'On Track' | 'At Risk' | 'Delayed';
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1>Development Works Tracker</h1>
          <p class="subtitle">Track infrastructure projects from sanction to completion</p>
        </div>
        <button mat-raised-button color="primary">
          <mat-icon>add</mat-icon>
          Add New Work
        </button>
      </div>

      <div class="stats-grid">
        <mat-card class="stat-card"><div class="stat-label">Total Projects</div><div class="stat-value">63</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">In Execution</div><div class="stat-value">38</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Delayed</div><div class="stat-value warn">14</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Total Budget</div><div class="stat-value">₹48.2 Cr</div></mat-card>
      </div>

      <mat-card class="table-card">
        <!-- Mobile Card View -->
        <div class="mobile-card-view">
          <div class="mobile-card" *ngFor="let work of works">
            <div class="mobile-card-header">
              <div class="mobile-card-title">{{ work.name }}</div>
              <mat-chip style="font-size: 11px;">{{ work.phase }}</mat-chip>
            </div>
            <div class="mobile-card-body">
              <div class="mobile-card-row">
                <span class="mobile-card-label">Category</span>
                <span class="mobile-card-value">{{ work.category }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Ward</span>
                <span class="mobile-card-badge" style="background: #e0f2fe; color: #0c4a6e; padding: 4px 8px; border-radius: 8px; font-size: 11px;">{{ work.ward }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Progress</span>
                <span class="mobile-card-value">{{ work.progress }}%</span>
              </div>
              <div style="margin: 8px 0;">
                <mat-progress-bar mode="determinate" [value]="work.progress"></mat-progress-bar>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Budget</span>
                <span class="mobile-card-value">{{ work.budget }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Target Date</span>
                <span class="mobile-card-value">{{ work.targetDate }}</span>
              </div>
            </div>
            <div class="mobile-card-actions">
              <button mat-raised-button color="primary" style="flex: 1;">View Details</button>
              <button mat-icon-button><mat-icon>edit</mat-icon></button>
            </div>
          </div>
        </div>

        <!-- Desktop Table View -->
        <table mat-table [dataSource]="works" class="works-table">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Project Name</th>
            <td mat-cell *matCellDef="let work"><strong>{{ work.name }}</strong><br><small>{{ work.category }}</small></td>
          </ng-container>

          <ng-container matColumnDef="ward">
            <th mat-header-cell *matHeaderCellDef>Ward</th>
            <td mat-cell *matCellDef="let work"><span class="ward-badge">{{ work.ward }}</span></td>
          </ng-container>

          <ng-container matColumnDef="phase">
            <th mat-header-cell *matHeaderCellDef>Phase</th>
            <td mat-cell *matCellDef="let work"><mat-chip>{{ work.phase }}</mat-chip></td>
          </ng-container>

          <ng-container matColumnDef="progress">
            <th mat-header-cell *matHeaderCellDef>Progress</th>
            <td mat-cell *matCellDef="let work">
              <div class="progress-cell">
                <mat-progress-bar mode="determinate" [value]="work.progress"></mat-progress-bar>
                <span>{{ work.progress }}%</span>
              </div>
            </td>
          </ng-container>

          <ng-container matColumnDef="budget">
            <th mat-header-cell *matHeaderCellDef>Budget</th>
            <td mat-cell *matCellDef="let work">{{ work.budget }}</td>
          </ng-container>

          <ng-container matColumnDef="targetDate">
            <th mat-header-cell *matHeaderCellDef>Target Date</th>
            <td mat-cell *matCellDef="let work">{{ work.targetDate }}</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let work"><mat-chip [color]="getStatusColor(work.status)">{{ work.status }}</mat-chip></td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let work">
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
    .stat-value.warn { color: #f44336; }
    .table-card { padding: 0; overflow: auto; }
    .works-table { width: 100%; }
    .works-table th { font-weight: 600; background: #f5f5f5; padding: 12px 16px; }
    .works-table td { padding: 12px 16px; }
    .ward-badge { display: inline-block; padding: 4px 12px; background: #e3f2fd; color: #1976d2; border-radius: 12px; font-size: 12px; font-weight: 500; }
    .progress-cell { display: flex; align-items: center; gap: 8px; }
    .progress-cell mat-progress-bar { flex: 1; }
    .progress-cell span { min-width: 40px; font-size: 13px; }
    small { color: rgba(0, 0, 0, 0.6); font-size: 11px; }
  `]
})
export class WorksComponent {
  works: DevelopmentWork[] = [
    { id: '1', name: 'Ward 22 BT Road Relaying', category: 'Roads & Transport', ward: '22', phase: 'Execution', progress: 64, budget: '₹1.8 Cr', sanctioned: '₹1.8 Cr', spent: '₹1.15 Cr', startDate: '2025-10-01', targetDate: '2025-12-12', contractor: 'Infra Corp', status: 'On Track' },
    { id: '2', name: 'Drinking Water Line Upgrade', category: 'Water Supply', ward: '15', phase: 'Tender', progress: 32, budget: '₹2.4 Cr', sanctioned: '₹2.4 Cr', spent: '₹0.77 Cr', startDate: '2025-11-01', targetDate: '2025-12-08', status: 'At Risk' },
    { id: '3', name: 'Anganwadi Refurbishment', category: 'Social Infrastructure', ward: '11', phase: 'Completion', progress: 88, budget: '₹48 L', sanctioned: '₹48 L', spent: '₹42 L', startDate: '2025-09-15', targetDate: '2025-12-04', contractor: 'BuildWell Ltd', status: 'On Track' }
  ];

  displayedColumns = ['name', 'ward', 'phase', 'progress', 'budget', 'targetDate', 'status', 'actions'];

  getStatusColor(status: string): string {
    return status === 'On Track' ? 'primary' : status === 'At Risk' ? 'accent' : 'warn';
  }
}
