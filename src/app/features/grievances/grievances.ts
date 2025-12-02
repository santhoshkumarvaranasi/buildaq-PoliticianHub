import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';

interface Grievance {
  id: string;
  ticketNumber: string;
  citizen: string;
  ward: string;
  category: string;
  subcategory: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'High' | 'Medium' | 'Low';
  channel: 'WhatsApp' | 'App' | 'Helpdesk' | 'Phone' | 'Walk-in';
  assignedTo: string;
  submittedDate: string;
  targetDate: string;
  resolvedDate?: string;
  slaStatus: 'On Track' | 'At Risk' | 'Breached';
  location: string;
  attachments: number;
  updates: number;
}

@Component({
  selector: 'app-grievances',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './grievances.html',
  styleUrls: ['./grievances.scss']
})
export class GrievancesComponent implements OnInit, OnDestroy {
  grievances: Grievance[] = [];
  filteredGrievances: Grievance[] = [];
  selectedGrievances: Set<string> = new Set();
  
  stats = {
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    highPriority: 0,
    slaBreached: 0,
    avgResolutionTime: '3.2 days',
    todayResolved: 14
  };

  filterStatus: string = 'all';
  filterPriority: string = 'all';
  filterWard: string = 'all';
  filterDateRange: string = 'all';
  searchTerm: string = '';
  autoRefresh: boolean = true;
  viewMode: 'table' | 'kanban' = 'table';

  displayedColumns: string[] = ['select', 'ticketNumber', 'citizen', 'ward', 'category', 'status', 'priority', 'channel', 'assignedTo', 'submittedDate', 'slaStatus', 'actions'];

  ngOnInit() {
    this.loadGrievances();
    this.calculateStats();
    this.startAutoRefresh();
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  private refreshInterval: any;

  startAutoRefresh() {
    if (this.autoRefresh) {
      this.refreshInterval = setInterval(() => {
        this.loadGrievances();
        this.calculateStats();
      }, 30000); // Refresh every 30 seconds
    }
  }

  toggleAutoRefresh() {
    this.autoRefresh = !this.autoRefresh;
    if (this.autoRefresh) {
      this.startAutoRefresh();
    } else if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  loadGrievances() {
    // Mock data - replace with API call
    this.grievances = [
      {
        id: '1',
        ticketNumber: 'GRV-2184',
        citizen: 'R. Latha',
        ward: '18',
        category: 'Water Supply',
        subcategory: 'Burst Pipeline',
        description: 'Pipeline burst near main road causing water logging',
        status: 'In Progress',
        priority: 'High',
        channel: 'WhatsApp',
        assignedTo: 'Kumar (Ward Volunteer)',
        submittedDate: '2025-11-28',
        targetDate: '2025-12-02',
        slaStatus: 'At Risk',
        location: 'Main Road, Ward 18',
        attachments: 2,
        updates: 3
      },
      {
        id: '2',
        ticketNumber: 'GRV-2183',
        citizen: 'P. Ramesh',
        ward: '12',
        category: 'Roads',
        subcategory: 'Pothole Repair',
        description: 'Large pothole causing accidents near school',
        status: 'Open',
        priority: 'High',
        channel: 'App',
        assignedTo: 'Unassigned',
        submittedDate: '2025-11-29',
        targetDate: '2025-12-03',
        slaStatus: 'On Track',
        location: 'School Street, Ward 12',
        attachments: 1,
        updates: 0
      },
      {
        id: '3',
        ticketNumber: 'GRV-2180',
        citizen: 'S. Priya',
        ward: '5',
        category: 'Street Lights',
        subcategory: 'Not Working',
        description: 'Three street lights not working for a week',
        status: 'Resolved',
        priority: 'Medium',
        channel: 'Helpdesk',
        assignedTo: 'Electricity Dept',
        submittedDate: '2025-11-25',
        targetDate: '2025-11-30',
        resolvedDate: '2025-11-30',
        slaStatus: 'On Track',
        location: 'Gandhi Nagar, Ward 5',
        attachments: 0,
        updates: 2
      },
      {
        id: '4',
        ticketNumber: 'GRV-2179',
        citizen: 'M. Venkat',
        ward: '22',
        category: 'Sanitation',
        subcategory: 'Garbage Collection',
        description: 'Garbage not collected for 3 days',
        status: 'In Progress',
        priority: 'Medium',
        channel: 'Phone',
        assignedTo: 'Sanitation Team',
        submittedDate: '2025-11-27',
        targetDate: '2025-12-01',
        slaStatus: 'Breached',
        location: 'Colony Road, Ward 22',
        attachments: 3,
        updates: 1
      },
      {
        id: '5',
        ticketNumber: 'GRV-2175',
        citizen: 'K. Lakshmi',
        ward: '8',
        category: 'Drainage',
        subcategory: 'Blocked Drain',
        description: 'Drain blocked causing overflow',
        status: 'Open',
        priority: 'Low',
        channel: 'WhatsApp',
        assignedTo: 'PWD Team',
        submittedDate: '2025-11-30',
        targetDate: '2025-12-05',
        slaStatus: 'On Track',
        location: 'Temple Street, Ward 8',
        attachments: 1,
        updates: 0
      }
    ];

    this.filteredGrievances = [...this.grievances];
  }

  calculateStats() {
    this.stats.total = this.grievances.length;
    this.stats.open = this.grievances.filter(g => g.status === 'Open').length;
    this.stats.inProgress = this.grievances.filter(g => g.status === 'In Progress').length;
    this.stats.resolved = this.grievances.filter(g => g.status === 'Resolved' || g.status === 'Closed').length;
    this.stats.highPriority = this.grievances.filter(g => g.priority === 'High').length;
    this.stats.slaBreached = this.grievances.filter(g => g.slaStatus === 'Breached').length;
  }

  applyFilters() {
    this.filteredGrievances = this.grievances.filter(grievance => {
      const statusMatch = this.filterStatus === 'all' || grievance.status === this.filterStatus;
      const priorityMatch = this.filterPriority === 'all' || grievance.priority === this.filterPriority;
      const wardMatch = this.filterWard === 'all' || grievance.ward === this.filterWard;
      const searchMatch = this.searchTerm === '' || 
        grievance.ticketNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        grievance.citizen.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        grievance.category.toLowerCase().includes(this.searchTerm.toLowerCase());

      return statusMatch && priorityMatch && wardMatch && searchMatch;
    });
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'Open': return 'warn';
      case 'In Progress': return 'accent';
      case 'Resolved': return 'primary';
      case 'Closed': return '';
      default: return '';
    }
  }

  getPriorityColor(priority: string): string {
    switch(priority) {
      case 'High': return 'warn';
      case 'Medium': return 'accent';
      case 'Low': return '';
      default: return '';
    }
  }

  getSlaColor(sla: string): string {
    switch(sla) {
      case 'On Track': return 'primary';
      case 'At Risk': return 'accent';
      case 'Breached': return 'warn';
      default: return '';
    }
  }

  viewGrievance(grievance: Grievance) {
    console.log('View grievance:', grievance);
    // Implement view logic
  }

  assignGrievance(grievance: Grievance) {
    console.log('Assign grievance:', grievance);
    // Implement assign logic
  }

  updateStatus(grievance: Grievance) {
    console.log('Update status:', grievance);
    // Implement status update logic
  }

  addGrievance() {
    console.log('Add new grievance');
    // Implement add grievance logic
  }

  toggleSelection(grievanceId: string) {
    if (this.selectedGrievances.has(grievanceId)) {
      this.selectedGrievances.delete(grievanceId);
    } else {
      this.selectedGrievances.add(grievanceId);
    }
  }

  toggleAllSelection() {
    if (this.selectedGrievances.size === this.filteredGrievances.length) {
      this.selectedGrievances.clear();
    } else {
      this.filteredGrievances.forEach(g => this.selectedGrievances.add(g.id));
    }
  }

  isSelected(grievanceId: string): boolean {
    return this.selectedGrievances.has(grievanceId);
  }

  isAllSelected(): boolean {
    return this.filteredGrievances.length > 0 && 
           this.selectedGrievances.size === this.filteredGrievances.length;
  }

  bulkAssign() {
    console.log('Bulk assign', Array.from(this.selectedGrievances));
    // Implement bulk assignment
  }

  bulkStatusUpdate() {
    console.log('Bulk status update', Array.from(this.selectedGrievances));
    // Implement bulk status update
  }

  bulkExport() {
    console.log('Export selected grievances', Array.from(this.selectedGrievances));
    // Implement export functionality
  }

  exportAllToCSV() {
    const csvData = this.convertToCSV(this.filteredGrievances);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `grievances_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  private convertToCSV(data: Grievance[]): string {
    const headers = ['Ticket #', 'Citizen', 'Ward', 'Category', 'Status', 'Priority', 'Channel', 'Assigned To', 'Submitted Date', 'SLA Status'];
    const rows = data.map(g => [
      g.ticketNumber,
      g.citizen,
      g.ward,
      g.category,
      g.status,
      g.priority,
      g.channel,
      g.assignedTo,
      g.submittedDate,
      g.slaStatus
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  refreshData() {
    this.loadGrievances();
    this.calculateStats();
  }

  clearFilters() {
    this.filterStatus = 'all';
    this.filterPriority = 'all';
    this.filterWard = 'all';
    this.filterDateRange = 'all';
    this.searchTerm = '';
    this.applyFilters();
  }
}
