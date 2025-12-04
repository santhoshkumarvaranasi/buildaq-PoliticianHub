import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';
import { WhatsAppFeedbackService, WhatsAppMessage } from '../../core/services/whatsapp-feedback.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-whatsapp-realtime',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  template: `
    <div class="whatsapp-realtime">
      <div class="header">
        <div class="header-left">
          <mat-icon class="whatsapp-icon">chat</mat-icon>
          <div>
            <h3>WhatsApp Feedback - Live</h3>
            <span class="status" [class.connected]="isConnected()">
              <span class="status-dot"></span>
              {{ isConnected() ? 'Connected' : 'Disconnected' }}
            </span>
          </div>
        </div>
        <div class="header-actions">
          <button mat-button (click)="sendBulkSurvey()" [disabled]="!isConnected()">
            <mat-icon>send</mat-icon>
            Send Survey
          </button>
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="viewAnalytics()">
              <mat-icon>analytics</mat-icon>
              View Analytics
            </button>
            <button mat-menu-item (click)="exportMessages()">
              <mat-icon>download</mat-icon>
              Export Messages
            </button>
            <button mat-menu-item (click)="toggleConnection()">
              <mat-icon>{{ isConnected() ? 'stop_circle' : 'play_circle' }}</mat-icon>
              {{ isConnected() ? 'Disconnect' : 'Connect' }}
            </button>
          </mat-menu>
        </div>
      </div>

      <div class="stats-bar">
        <div class="stat">
          <mat-icon>message</mat-icon>
          <div>
            <span class="stat-value">{{ totalMessages() }}</span>
            <span class="stat-label">Total Messages</span>
          </div>
        </div>
        <div class="stat">
          <mat-icon>schedule</mat-icon>
          <div>
            <span class="stat-value">{{ todayMessages() }}</span>
            <span class="stat-label">Today</span>
          </div>
        </div>
        <div class="stat">
          <mat-icon>star</mat-icon>
          <div>
            <span class="stat-value">{{ averageRating() }}</span>
            <span class="stat-label">Avg Rating</span>
          </div>
        </div>
        <div class="stat">
          <mat-icon>speed</mat-icon>
          <div>
            <span class="stat-value">{{ responseRate() }}%</span>
            <span class="stat-label">Response Rate</span>
          </div>
        </div>
      </div>

      <div class="messages-container">
        <div class="messages-header">
          <h4>Live Messages</h4>
          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>Filter</mat-label>
            <mat-select [(ngModel)]="filterType" (selectionChange)="applyFilter()">
              <mat-option value="all">All Messages</mat-option>
              <mat-option value="positive">Positive</mat-option>
              <mat-option value="neutral">Neutral</mat-option>
              <mat-option value="negative">Negative</mat-option>
              <mat-option value="unread">Unread</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <div class="messages-list" #messagesList>
          @if (filteredMessages().length === 0) {
            <div class="empty-state">
              <mat-icon>chat_bubble_outline</mat-icon>
              <p>No messages yet</p>
              <span>Messages will appear here in real-time</span>
            </div>
          } @else {
            @for (message of filteredMessages(); track message.id) {
              <div class="message-card" 
                   [class.unread]="!message.read"
                   [class.positive]="message.sentiment === 'positive'"
                   [class.negative]="message.sentiment === 'negative'">
                <div class="message-header">
                  <div class="sender-info">
                    <mat-icon class="avatar-icon">account_circle</mat-icon>
                    <div>
                      <div class="sender-name">{{ message.name }}</div>
                      <div class="sender-phone">{{ message.from }}</div>
                    </div>
                  </div>
                  <div class="message-meta">
                    <span class="timestamp">{{ formatTime(message.timestamp) }}</span>
                    @if (message.rating) {
                      <div class="rating">
                        @for (star of [1,2,3,4,5]; track star) {
                          <mat-icon [class.filled]="star <= message.rating!">star</mat-icon>
                        }
                      </div>
                    }
                  </div>
                </div>
                
                <div class="message-content">
                  <p>{{ message.message }}</p>
                  @if (message.category) {
                    <mat-chip class="category-chip">{{ message.category }}</mat-chip>
                  }
                  @if (message.sentiment) {
                    <mat-chip [class]="'sentiment-' + message.sentiment">
                      {{ message.sentiment }}
                    </mat-chip>
                  }
                </div>

                <div class="message-actions">
                  <button mat-button (click)="replyToMessage(message)">
                    <mat-icon>reply</mat-icon>
                    Reply
                  </button>
                  <button mat-button (click)="categorizeMessage(message)">
                    <mat-icon>label</mat-icon>
                    Categorize
                  </button>
                  <button mat-button (click)="createGrievance(message)">
                    <mat-icon>report_problem</mat-icon>
                    Create Grievance
                  </button>
                </div>
              </div>
            }
          }
        </div>
      </div>

      <!-- New Message Notification -->
      @if (showNewMessageBadge()) {
        <div class="new-message-badge" (click)="scrollToTop()">
          <mat-icon>arrow_upward</mat-icon>
          {{ newMessageCount() }} new message(s)
        </div>
      }
    </div>
  `,
  styles: [`
    .whatsapp-realtime {
      display: flex;
      flex-direction: column;
      height: calc(100vh - 200px);
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: white;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        padding: 16px;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;

        .whatsapp-icon {
          font-size: 40px;
          width: 40px;
          height: 40px;
        }

        h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;

          @media (max-width: 768px) {
            font-size: 18px;
          }
        }

        .status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          opacity: 0.9;

          .status-dot {
            width: 8px;
            height: 8px;
            background: #ff4444;
            border-radius: 50%;
            animation: pulse 2s infinite;
          }

          &.connected .status-dot {
            background: #4caf50;
          }
        }
      }

      .header-actions {
        display: flex;
        gap: 8px;

        button {
          color: white;
        }
      }
    }

    .stats-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: #f0f0f0;
      border-bottom: 1px solid #e0e0e0;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }

      .stat {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
        background: white;

        mat-icon {
          color: #25D366;
          font-size: 28px;
          width: 28px;
          height: 28px;
        }

        .stat-value {
          display: block;
          font-size: 24px;
          font-weight: 600;
          color: #333;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          display: block;
          font-size: 12px;
          color: #888;
        }
      }
    }

    .messages-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .messages-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        border-bottom: 1px solid #e0e0e0;

        h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .filter-field {
          width: 180px;
          margin: 0;
        }
      }

      .messages-list {
        flex: 1;
        overflow-y: auto;
        padding: 16px 24px;

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #999;

          mat-icon {
            font-size: 64px;
            width: 64px;
            height: 64px;
            margin-bottom: 16px;
            opacity: 0.3;
          }

          p {
            font-size: 18px;
            font-weight: 500;
            margin: 0 0 8px;
          }

          span {
            font-size: 14px;
          }
        }

        .message-card {
          background: #fafafa;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          border-left: 4px solid #e0e0e0;
          transition: all 0.3s;
          animation: slideIn 0.3s ease-out;

          &.unread {
            background: #fff9e6;
            border-left-color: #ffc107;
          }

          &.positive {
            border-left-color: #4caf50;
          }

          &.negative {
            border-left-color: #f44336;
          }

          &:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transform: translateY(-2px);
          }

          .message-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;

            @media (max-width: 480px) {
              flex-direction: column;
              gap: 8px;
            }

            .sender-info {
              display: flex;
              gap: 12px;

              .avatar-icon {
                font-size: 40px;
                width: 40px;
                height: 40px;
                color: #25D366;
              }

              .sender-name {
                font-weight: 600;
                color: #333;
                margin-bottom: 4px;
              }

              .sender-phone {
                font-size: 12px;
                color: #888;
              }
            }

            .message-meta {
              text-align: right;

              .timestamp {
                display: block;
                font-size: 12px;
                color: #888;
                margin-bottom: 4px;
              }

              .rating {
                display: flex;
                gap: 2px;

                mat-icon {
                  font-size: 16px;
                  width: 16px;
                  height: 16px;
                  color: #ddd;

                  &.filled {
                    color: #ffc107;
                  }
                }
              }
            }
          }

          .message-content {
            margin-bottom: 12px;

            p {
              margin: 0 0 8px;
              color: #666;
              line-height: 1.5;
            }

            mat-chip {
              margin-right: 8px;
              font-size: 11px;
              min-height: 24px;
              padding: 0 8px;

              &.sentiment-positive {
                background: #e8f5e9;
                color: #2e7d32;
              }

              &.sentiment-negative {
                background: #ffebee;
                color: #c62828;
              }

              &.sentiment-neutral {
                background: #fff3e0;
                color: #ef6c00;
              }
            }
          }

          .message-actions {
            display: flex;
            gap: 8px;
            padding-top: 8px;
            border-top: 1px solid #e0e0e0;

            @media (max-width: 480px) {
              flex-direction: column;
              gap: 4px;

              button {
                width: 100%;
                justify-content: center;
              }
            }

            button {
              font-size: 13px;

              mat-icon {
                margin-right: 4px;
                font-size: 18px;
                width: 18px;
                height: 18px;
              }
            }
          }
        }
      }
    }

    .new-message-badge {
      position: fixed;
      bottom: 32px;
      right: 32px;
      background: #25D366;
      color: white;
      padding: 12px 20px;
      border-radius: 24px;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      animation: bounce 1s infinite;
      z-index: 1000;

      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `]
})
export class WhatsAppRealtimeComponent implements OnInit, OnDestroy {
  isConnected = signal(false);
  messages = signal<WhatsAppMessage[]>([]);
  filteredMessages = signal<WhatsAppMessage[]>([]);
  totalMessages = signal(0);
  todayMessages = signal(0);
  averageRating = signal(0);
  responseRate = signal(68);
  newMessageCount = signal(0);
  showNewMessageBadge = signal(false);
  
  filterType = 'all';
  private subscription?: Subscription;

  constructor(private whatsappService: WhatsAppFeedbackService) {}

  ngOnInit() {
    this.connectToWhatsApp();
  }

  ngOnDestroy() {
    this.disconnect();
  }

  connectToWhatsApp() {
    this.subscription = this.whatsappService.connectRealtime().subscribe({
      next: (message: WhatsAppMessage) => {
        this.handleNewMessage(message);
      },
      error: (error: any) => {
        console.error('WhatsApp connection error:', error);
        this.isConnected.set(false);
      }
    });
    
    this.isConnected.set(true);
  }

  disconnect() {
    this.whatsappService.disconnect();
    this.subscription?.unsubscribe();
    this.isConnected.set(false);
  }

  toggleConnection() {
    if (this.isConnected()) {
      this.disconnect();
    } else {
      this.connectToWhatsApp();
    }
  }

  handleNewMessage(message: WhatsAppMessage) {
    const currentMessages = this.messages();
    this.messages.set([message, ...currentMessages]);
    this.filteredMessages.set([message, ...this.filteredMessages()]);
    
    this.totalMessages.set(this.totalMessages() + 1);
    
    // Check if message is from today
    const today = new Date().toDateString();
    if (new Date(message.timestamp).toDateString() === today) {
      this.todayMessages.set(this.todayMessages() + 1);
    }
    
    // Update average rating
    if (message.rating) {
      const messagesWithRating = currentMessages.filter(m => m.rating);
      const totalRating = messagesWithRating.reduce((sum, m) => sum + (m.rating || 0), 0) + message.rating;
      this.averageRating.set(Number((totalRating / (messagesWithRating.length + 1)).toFixed(1)));
    }
    
    // Show new message badge
    this.newMessageCount.set(this.newMessageCount() + 1);
    this.showNewMessageBadge.set(true);
    
    // Play notification sound
    this.playNotificationSound();
  }

  applyFilter() {
    const allMessages = this.messages();
    
    switch (this.filterType) {
      case 'positive':
        this.filteredMessages.set(allMessages.filter(m => m.sentiment === 'positive'));
        break;
      case 'neutral':
        this.filteredMessages.set(allMessages.filter(m => m.sentiment === 'neutral'));
        break;
      case 'negative':
        this.filteredMessages.set(allMessages.filter(m => m.sentiment === 'negative'));
        break;
      case 'unread':
        this.filteredMessages.set(allMessages.filter(m => !(m as any).read));
        break;
      default:
        this.filteredMessages.set(allMessages);
    }
  }

  sendBulkSurvey() {
    console.log('Sending bulk WhatsApp survey...');
    alert('Bulk survey feature - integrate with your voter database');
  }

  viewAnalytics() {
    console.log('Viewing WhatsApp analytics...');
    alert('Analytics dashboard coming soon');
  }

  exportMessages() {
    const csv = this.messages().map(m => 
      `${m.name},${m.from},${m.message},${m.rating || 'N/A'},${m.sentiment},${m.timestamp}`
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `whatsapp_feedback_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  }

  replyToMessage(message: WhatsAppMessage) {
    const reply = prompt(`Reply to ${message.name}:`);
    if (reply) {
      this.whatsappService.sendTextMessage(message.from, reply).subscribe({
        next: () => alert('Reply sent successfully'),
        error: (err: any) => console.error('Failed to send reply:', err)
      });
    }
  }

  categorizeMessage(message: WhatsAppMessage) {
    const category = prompt('Enter category (e.g., Infrastructure, Healthcare):');
    if (category) {
      message.category = category;
      console.log('Message categorized:', message);
    }
  }

  createGrievance(message: WhatsAppMessage) {
    console.log('Creating grievance from message:', message);
    alert('Grievance created successfully from WhatsApp feedback');
  }

  scrollToTop() {
    const messagesList = document.querySelector('.messages-list');
    messagesList?.scrollTo({ top: 0, behavior: 'smooth' });
    this.newMessageCount.set(0);
    this.showNewMessageBadge.set(false);
  }

  formatTime(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    
    return new Date(timestamp).toLocaleDateString();
  }

  private playNotificationSound() {
    // You can add an actual audio file here
    // const audio = new Audio('/assets/notification.mp3');
    // audio.play();
  }
}
