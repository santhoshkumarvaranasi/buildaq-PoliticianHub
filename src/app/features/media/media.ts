import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material.module';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1>Media & Social Desk</h1>
          <p class="subtitle">Content publishing, social media management, and sentiment tracking</p>
        </div>
        <button mat-raised-button color="primary">
          <mat-icon>add_photo_alternate</mat-icon>
          New Post
        </button>
      </div>

      <div class="stats-grid">
        <mat-card class="stat-card"><div class="stat-label">Total Posts</div><div class="stat-value">124</div><div class="stat-meta">this month</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Engagement</div><div class="stat-value">18.2K</div><div class="stat-meta">likes & shares</div></mat-card>
        <mat-card class="stat-card"><div class="stat-label">Reach</div><div class="stat-value">156K</div><div class="stat-meta">people reached</div></mat-card>
        <mat-card class="stat-card sentiment-positive"><div class="stat-label">Sentiment</div><div class="stat-value">82%</div><div class="stat-meta">positive</div></mat-card>
      </div>

      <mat-card class="platforms-card">
        <h3>Social Media Platforms</h3>
        <div class="platform-row" *ngFor="let platform of platforms">
          <div class="platform-info">
            <mat-icon [style.color]="platform.color">{{ platform.icon }}</mat-icon>
            <div>
              <strong>{{ platform.name }}</strong>
              <p>{{ platform.followers }} followers</p>
            </div>
          </div>
          <div class="platform-stats">
            <span class="stat-item">{{ platform.posts }} posts</span>
            <span class="stat-item">{{ platform.engagement }} engagement</span>
          </div>
          <button mat-icon-button><mat-icon>open_in_new</mat-icon></button>
        </div>
      </mat-card>

      <mat-card class="table-card">
        <h3 style="padding: 16px 16px 0;">Recent Content</h3>
        
        <!-- Mobile Card View -->
        <div class="mobile-card-view">
          <div class="mobile-card" *ngFor="let post of posts">
            <div class="mobile-card-header">
              <div class="mobile-card-title">{{ post.title }}</div>
              <span class="mobile-card-badge" style="background: #e0f2fe; color: #0c4a6e; padding: 4px 8px; border-radius: 8px; font-size: 11px;">{{ post.type }}</span>
            </div>
            <div class="mobile-card-body">
              <div class="mobile-card-row">
                <span class="mobile-card-label">Description</span>
                <span class="mobile-card-value" style="text-align: left;">{{ post.description }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Platforms</span>
                <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                  <mat-chip *ngFor="let p of post.platforms" style="font-size: 11px;">{{ p }}</mat-chip>
                </div>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Reach</span>
                <span class="mobile-card-value">{{ post.reach | number }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Engagement</span>
                <span class="mobile-card-value">{{ post.engagement | number }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Posted</span>
                <span class="mobile-card-value">{{ post.postedDate }}</span>
              </div>
              <div class="mobile-card-row">
                <span class="mobile-card-label">Author</span>
                <span class="mobile-card-value">{{ post.author }}</span>
              </div>
            </div>
            <div class="mobile-card-actions">
              <button mat-raised-button color="primary" style="flex: 1;">View Analytics</button>
              <button mat-icon-button><mat-icon>edit</mat-icon></button>
              <button mat-icon-button><mat-icon>share</mat-icon></button>
            </div>
          </div>
        </div>

        <!-- Desktop Table View -->
        <table mat-table [dataSource]="posts" class="posts-table">
          <ng-container matColumnDef="content">
            <th mat-header-cell *matHeaderCellDef>Content</th>
            <td mat-cell *matCellDef="let post">
              <div class="content-cell">
                <strong>{{ post.title }}</strong>
                <small>{{ post.description }}</small>
              </div>
            </td>
          </ng-container>

          <ng-container matColumnDef="platform">
            <th mat-header-cell *matHeaderCellDef>Platform</th>
            <td mat-cell *matCellDef="let post">
              <mat-chip *ngFor="let p of post.platforms">{{ p }}</mat-chip>
            </td>
          </ng-container>

          <ng-container matColumnDef="type">
            <th mat-header-cell *matHeaderCellDef>Type</th>
            <td mat-cell *matCellDef="let post">{{ post.type }}</td>
          </ng-container>

          <ng-container matColumnDef="reach">
            <th mat-header-cell *matHeaderCellDef>Reach</th>
            <td mat-cell *matCellDef="let post">{{ post.reach | number }}</td>
          </ng-container>

          <ng-container matColumnDef="engagement">
            <th mat-header-cell *matHeaderCellDef>Engagement</th>
            <td mat-cell *matCellDef="let post">{{ post.engagement | number }}</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let post">
              <mat-chip [color]="getStatusColor(post.status)">{{ post.status }}</mat-chip>
            </td>
          </ng-container>

          <ng-container matColumnDef="date">
            <th mat-header-cell *matHeaderCellDef>Date</th>
            <td mat-cell *matCellDef="let post">{{ post.date }}</td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let post">
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
    .sentiment-positive .stat-value { color: #4caf50; }
    .platforms-card { padding: 24px; margin-bottom: 24px; }
    .platforms-card h3 { margin: 0 0 20px 0; }
    .platform-row { display: flex; gap: 16px; align-items: center; padding: 16px; border-bottom: 1px solid #eee; }
    .platform-row:last-child { border-bottom: none; }
    .platform-info { display: flex; gap: 12px; align-items: center; flex: 1; }
    .platform-info mat-icon { font-size: 28px; width: 28px; height: 28px; }
    .platform-info p { margin: 4px 0 0 0; color: rgba(0, 0, 0, 0.6); font-size: 12px; }
    .platform-stats { display: flex; gap: 16px; }
    .stat-item { font-size: 13px; color: rgba(0, 0, 0, 0.6); }
    .table-card { padding: 0; overflow: auto; }
    .posts-table { width: 100%; }
    .posts-table th { font-weight: 600; background: #f5f5f5; padding: 12px 16px; }
    .posts-table td { padding: 12px 16px; }
    .content-cell { display: flex; flex-direction: column; gap: 4px; }
    .content-cell strong { font-weight: 600; }
    small { color: rgba(0, 0, 0, 0.6); font-size: 11px; }
    mat-chip { margin-right: 4px; }
  `]
})
export class MediaComponent {
  platforms = [
    { name: 'Facebook', icon: 'facebook', color: '#1877F2', followers: '42.5K', posts: 38, engagement: '4.2K' },
    { name: 'Twitter/X', icon: 'close', color: '#000000', followers: '18.2K', posts: 124, engagement: '2.8K' },
    { name: 'Instagram', icon: 'photo_camera', color: '#E4405F', followers: '28.7K', posts: 56, engagement: '5.6K' },
    { name: 'YouTube', icon: 'videocam', color: '#FF0000', followers: '12.4K', posts: 18, engagement: '8.4K' }
  ];

  posts = [
    { title: 'Road Inauguration Ward 22', description: 'BT Road work completed ahead of schedule', platforms: ['Facebook', 'Instagram'], type: 'Photo', reach: 12400, engagement: 1280, status: 'Published', date: '2025-12-01' },
    { title: 'Health Camp Announcement', description: 'Free medical checkup for senior citizens', platforms: ['Facebook', 'Twitter'], type: 'Graphic', reach: 8500, engagement: 640, status: 'Published', date: '2025-11-30' },
    { title: 'Festival Greetings Video', description: 'Sankranthi wishes from MLA', platforms: ['Facebook', 'Instagram', 'YouTube'], type: 'Video', reach: 28400, engagement: 3200, status: 'Scheduled', date: '2025-12-05' }
  ];

  displayedColumns = ['content', 'platform', 'type', 'reach', 'engagement', 'status', 'date', 'actions'];

  getStatusColor(status: string): string {
    return status === 'Published' ? 'primary' : status === 'Scheduled' ? 'accent' : '';
  }
}
