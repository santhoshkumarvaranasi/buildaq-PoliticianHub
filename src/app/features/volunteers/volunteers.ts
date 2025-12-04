import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material.module';

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1>Volunteer Network</h1>
          <p class="subtitle">Manage ward leads, booth captains, and street volunteers</p>
        </div>
        <button mat-raised-button color="primary">
          <mat-icon>person_add</mat-icon>
          Add Volunteer
        </button>
      </div>

      <div class="stats-grid">
        <mat-card class="stat-card"><div class="stat-label">Total Active</div><div class="stat-value">412</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Ward Leads</div><div class="stat-value">32</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Booth Captains</div><div class="stat-value">214</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Street Volunteers</div><div class="stat-value">1180</div></mat-card>
      </div>

      <mat-card class="levels-card">
        <h3>Volunteer Hierarchy</h3>
        <div class="level-row" *ngFor="let level of volunteerLevels">
          <div class="level-info">
            <mat-icon>{{ level.icon }}</mat-icon>
            <div>
              <strong>{{ level.title }}</strong>
              <p>{{ level.description }}</p>
            </div>
          </div>
          <div class="level-count">{{ level.count }} active</div>
        </div>
      </mat-card>

      <mat-card class="table-card">
        <!-- Mobile Card View -->
        <div class="mobile-card-view">
          <div class="mobile-card" *ngFor="let vol of volunteers">
            <div class="mobile-card-header">
              <div class="mobile-card-title">{{ vol.name }}</div>
              <mat-chip style="font-size: 11px; background: #dbeafe; color: #1e40af;">{{ vol.role }}</mat-chip>
            </div>
            <div class="mobile-card-body">
              <div class="mobile-card-row">
                <span class="mobile-card-label">Ward</span>
                <span class="mobile-card-badge" style="background: #e0f2fe; color: #0c4a6e; padding: 4px 8px; border-radius: 8px; font-size: 11px;">{{ vol.ward }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Tasks Completed</span>
                <span class="mobile-card-value">{{ vol.tasks }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Rating</span>
                <span class="mobile-card-value">⭐ {{ vol.rating }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Last Active</span>
                <span class="mobile-card-value">{{ vol.lastActive }}</span>
              </div>
            </div>
            <div class="mobile-card-actions">
              <button mat-raised-button color="primary" style="flex: 1;">View Profile</button>
              <button mat-icon-button><mat-icon>call</mat-icon></button>
              <button mat-icon-button><mat-icon>more_vert</mat-icon></button>
            </div>
          </div>
        </div>

        <!-- Desktop Table View -->
        <table mat-table [dataSource]="volunteers" class="volunteers-table">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let vol"><strong>{{ vol.name }}</strong></td>
          </ng-container>

          <ng-container matColumnDef="role">
            <th mat-header-cell *matHeaderCellDef>Role</th>
            <td mat-cell *matCellDef="let vol"><mat-chip>{{ vol.role }}</mat-chip></td>
          </ng-container>

          <ng-container matColumnDef="ward">
            <th mat-header-cell *matHeaderCellDef>Ward</th>
            <td mat-cell *matCellDef="let vol"><span class="ward-badge">{{ vol.ward }}</span></td>
          </ng-container>

          <ng-container matColumnDef="tasks">
            <th mat-header-cell *matHeaderCellDef>Tasks Completed</th>
            <td mat-cell *matCellDef="let vol">{{ vol.tasks }}</td>
          </ng-container>

          <ng-container matColumnDef="rating">
            <th mat-header-cell *matHeaderCellDef>Rating</th>
            <td mat-cell *matCellDef="let vol">⭐ {{ vol.rating }}</td>
          </ng-container>

          <ng-container matColumnDef="lastActive">
            <th mat-header-cell *matHeaderCellDef>Last Active</th>
            <td mat-cell *matCellDef="let vol">{{ vol.lastActive }}</td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let vol">
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
    .levels-card { padding: 24px; margin-bottom: 24px; }
    .levels-card h3 { margin: 0 0 20px 0; }
    .level-row { display: flex; justify-content: space-between; align-items: center; padding: 16px; border-bottom: 1px solid #eee; }
    .level-row:last-child { border-bottom: none; }
    .level-info { display: flex; gap: 16px; align-items: center; }
    .level-info mat-icon { color: #1976d2; }
    .level-info p { margin: 4px 0 0 0; color: rgba(0, 0, 0, 0.6); font-size: 13px; }
    .level-count { font-size: 18px; font-weight: 600; color: #1976d2; }
    .table-card { padding: 0; overflow: auto; }
    .volunteers-table { width: 100%; }
    .volunteers-table th { font-weight: 600; background: #f5f5f5; padding: 12px 16px; }
    .volunteers-table td { padding: 12px 16px; }
    .ward-badge { display: inline-block; padding: 4px 12px; background: #e3f2fd; color: #1976d2; border-radius: 12px; font-size: 12px; font-weight: 500; }
  `]
})
export class VolunteersComponent {
  volunteerLevels = [
    { icon: 'workspace_premium', title: 'Ward Leads', count: 32, description: 'Drive grievance SLAs and volunteer rosters' },
    { icon: 'groups', title: 'Booth Captains', count: 214, description: 'Collect booth sentiment, manage WhatsApp groups' },
    { icon: 'person', title: 'Street Volunteers', count: 1180, description: 'Household visits, surveys, evidence uploads' }
  ];

  volunteers = [
    { name: 'Kumar Rao', role: 'Ward Lead', ward: '18', tasks: 48, rating: 4.8, lastActive: '2025-12-01' },
    { name: 'Priya Menon', role: 'Booth Captain', ward: '12', tasks: 32, rating: 4.5, lastActive: '2025-12-02' },
    { name: 'Venkat Swamy', role: 'Street Volunteer', ward: '22', tasks: 15, rating: 4.2, lastActive: '2025-11-30' }
  ];

  displayedColumns = ['name', 'role', 'ward', 'tasks', 'rating', 'lastActive', 'actions'];
}
