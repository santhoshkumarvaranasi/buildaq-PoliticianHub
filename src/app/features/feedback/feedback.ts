import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';
import { WhatsAppRealtimeComponent } from './whatsapp-realtime.component';

interface FeedbackChannel {
  id: string;
  name: string;
  type: 'sms' | 'whatsapp' | 'voice' | 'app' | 'booth' | 'qr' | 'email' | 'web';
  icon: string;
  active: boolean;
  responses: number;
  responseRate: number;
  avgRating: number;
  status: 'active' | 'paused' | 'scheduled';
}

interface FeedbackCampaign {
  id: string;
  title: string;
  channels: string[];
  target: string;
  sent: number;
  responded: number;
  rating: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'completed' | 'scheduled';
}

interface FeedbackResponse {
  id: string;
  channel: string;
  respondent: string;
  rating: number;
  category: string;
  feedback: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  timestamp: Date;
  location: string;
  actionTaken: boolean;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule, WhatsAppRealtimeComponent],
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  activeTab = signal<'overview' | 'channels' | 'campaigns' | 'responses' | 'analytics'>('overview');
  
  channels = signal<FeedbackChannel[]>([
    {
      id: '1',
      name: 'SMS Surveys',
      type: 'sms',
      icon: 'sms',
      active: true,
      responses: 3245,
      responseRate: 42,
      avgRating: 4.2,
      status: 'active'
    },
    {
      id: '2',
      name: 'WhatsApp',
      type: 'whatsapp',
      icon: 'chat',
      active: true,
      responses: 5678,
      responseRate: 68,
      avgRating: 4.5,
      status: 'active'
    },
    {
      id: '3',
      name: 'Voice Calls',
      type: 'voice',
      icon: 'phone',
      active: true,
      responses: 1234,
      responseRate: 28,
      avgRating: 4.1,
      status: 'active'
    },
    {
      id: '4',
      name: 'Mobile App',
      type: 'app',
      icon: 'phone_android',
      active: true,
      responses: 4567,
      responseRate: 72,
      avgRating: 4.6,
      status: 'active'
    },
    {
      id: '5',
      name: 'Booth Kiosks',
      type: 'booth',
      icon: 'tablet',
      active: true,
      responses: 890,
      responseRate: 85,
      avgRating: 4.3,
      status: 'active'
    },
    {
      id: '6',
      name: 'QR Code Surveys',
      type: 'qr',
      icon: 'qr_code_2',
      active: true,
      responses: 2345,
      responseRate: 55,
      avgRating: 4.0,
      status: 'active'
    },
    {
      id: '7',
      name: 'Email Campaigns',
      type: 'email',
      icon: 'email',
      active: true,
      responses: 1890,
      responseRate: 35,
      avgRating: 3.9,
      status: 'active'
    },
    {
      id: '8',
      name: 'Web Portal',
      type: 'web',
      icon: 'public',
      active: true,
      responses: 3456,
      responseRate: 48,
      avgRating: 4.4,
      status: 'active'
    }
  ]);

  campaigns = signal<FeedbackCampaign[]>([
    {
      id: '1',
      title: 'Infrastructure Satisfaction Survey',
      channels: ['sms', 'whatsapp', 'app'],
      target: 'All Voters',
      sent: 25000,
      responded: 14500,
      rating: 4.3,
      startDate: new Date('2024-11-20'),
      endDate: new Date('2024-12-05'),
      status: 'active'
    },
    {
      id: '2',
      title: 'Healthcare Services Feedback',
      channels: ['voice', 'booth', 'qr'],
      target: 'Senior Citizens',
      sent: 8000,
      responded: 5600,
      rating: 4.1,
      startDate: new Date('2024-11-25'),
      endDate: new Date('2024-12-10'),
      status: 'active'
    },
    {
      id: '3',
      title: 'Education Quality Assessment',
      channels: ['email', 'web', 'app'],
      target: 'Parents',
      sent: 12000,
      responded: 8400,
      rating: 4.5,
      startDate: new Date('2024-11-15'),
      endDate: new Date('2024-11-30'),
      status: 'completed'
    }
  ]);

  responses = signal<FeedbackResponse[]>([
    {
      id: '1',
      channel: 'WhatsApp',
      respondent: 'Rajesh Kumar',
      rating: 5,
      category: 'Infrastructure',
      feedback: 'Road construction quality has improved significantly in our area',
      sentiment: 'positive',
      timestamp: new Date('2024-12-02 10:30'),
      location: 'Ward 12',
      actionTaken: false
    },
    {
      id: '2',
      channel: 'SMS',
      respondent: 'Priya Sharma',
      rating: 3,
      category: 'Healthcare',
      feedback: 'Need more doctors at the primary health center',
      sentiment: 'neutral',
      timestamp: new Date('2024-12-02 09:15'),
      location: 'Ward 8',
      actionTaken: true
    },
    {
      id: '3',
      channel: 'Mobile App',
      respondent: 'Amit Patel',
      rating: 4,
      category: 'Education',
      feedback: 'School building renovation done well, need better playground',
      sentiment: 'positive',
      timestamp: new Date('2024-12-02 08:45'),
      location: 'Ward 15',
      actionTaken: false
    },
    {
      id: '4',
      channel: 'Booth Kiosk',
      respondent: 'Sunita Devi',
      rating: 2,
      category: 'Water Supply',
      feedback: 'Water shortage continues in our colony',
      sentiment: 'negative',
      timestamp: new Date('2024-12-01 16:20'),
      location: 'Ward 5',
      actionTaken: true
    }
  ]);

  stats = {
    totalResponses: 23305,
    averageRating: 4.3,
    responseRate: 58,
    activeCampaigns: 2,
    positivePercent: 68,
    neutralPercent: 24,
    negativePercent: 8,
    actionTakenRate: 42
  };

  selectedChannel = signal<string>('all');
  searchQuery = signal<string>('');
  selectedSentiment = signal<string>('all');
  private refreshInterval: any;

  ngOnInit() {
    this.startAutoRefresh();
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  startAutoRefresh() {
    this.refreshInterval = setInterval(() => {
      // Simulate real-time updates
      const currentResponses = this.responses();
      if (Math.random() > 0.7) {
        this.stats.totalResponses++;
      }
    }, 30000); // 30 seconds
  }

  setActiveTab(tab: 'overview' | 'channels' | 'campaigns' | 'responses' | 'analytics') {
    this.activeTab.set(tab);
  }

  toggleChannel(channelId: string) {
    const channels = this.channels();
    const index = channels.findIndex(c => c.id === channelId);
    if (index !== -1) {
      channels[index].active = !channels[index].active;
      channels[index].status = channels[index].active ? 'active' : 'paused';
      this.channels.set([...channels]);
    }
  }

  createCampaign() {
    console.log('Create new feedback campaign');
  }

  exportResponses() {
    const csv = this.responses().map(r => 
      `${r.channel},${r.respondent},${r.rating},${r.category},${r.feedback},${r.sentiment},${r.timestamp},${r.location}`
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback_responses_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  }

  viewDetails(responseId: string) {
    console.log('View response details:', responseId);
  }

  takeAction(responseId: string) {
    const responses = this.responses();
    const index = responses.findIndex(r => r.id === responseId);
    if (index !== -1) {
      responses[index].actionTaken = true;
      this.responses.set([...responses]);
      this.stats.actionTakenRate++;
    }
  }

  getSentimentColor(sentiment: string): string {
    switch(sentiment) {
      case 'positive': return '#4caf50';
      case 'negative': return '#f44336';
      default: return '#ff9800';
    }
  }

  getChannelIcon(channel: string): string {
    const channelData = this.channels().find(c => c.name === channel);
    return channelData?.icon || 'feedback';
  }

  filteredResponses() {
    let filtered = this.responses();
    
    if (this.selectedChannel() !== 'all') {
      filtered = filtered.filter(r => r.channel === this.selectedChannel());
    }
    
    if (this.selectedSentiment() !== 'all') {
      filtered = filtered.filter(r => r.sentiment === this.selectedSentiment());
    }
    
    if (this.searchQuery()) {
      const query = this.searchQuery().toLowerCase();
      filtered = filtered.filter(r => 
        r.feedback.toLowerCase().includes(query) ||
        r.respondent.toLowerCase().includes(query) ||
        r.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }
}
