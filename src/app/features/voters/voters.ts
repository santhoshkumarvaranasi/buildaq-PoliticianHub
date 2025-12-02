import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';

interface Voter {
  id: string;
  epicId: string;
  name: string;
  age: number;
  gender: string;
  ward: string;
  booth: number;
  street: string;
  family: string;
  phone?: string;
  tags: string[];
  lastVisit?: string;
  sentiment?: 'Positive' | 'Neutral' | 'Negative';
}

interface Family {
  id: string;
  familyName: string;
  address: string;
  ward: string;
  members: number;
  voters: number;
  tags: string[];
}

@Component({
  selector: 'app-voters',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './voters.html',
  styleUrls: ['./voters.scss']
})
export class VotersComponent implements OnInit {
  voters: Voter[] = [];
  filteredVoters: Voter[] = [];
  families: Family[] = [];
  
  stats = {
    totalVoters: 42180,
    families: 5920,
    booths: 246,
    wards: 32,
    tagged: 72,
    seniorCitizens: 6120,
    firstTimeVoters: 5100,
    govtStaff: 820
  };

  filterWard: string = 'all';
  filterBooth: string = 'all';
  filterTag: string = 'all';
  searchTerm: string = '';
  viewMode: 'voters' | 'families' | 'analytics' = 'voters';

  displayedColumns: string[] = ['epicId', 'name', 'age', 'gender', 'ward', 'booth', 'street', 'tags', 'lastVisit', 'actions'];
  familyColumns: string[] = ['familyName', 'address', 'ward', 'members', 'voters', 'tags', 'actions'];

  ngOnInit() {
    this.loadVoters();
    this.loadFamilies();
  }

  loadVoters() {
    // Mock data
    this.voters = [
      {
        id: '1',
        epicId: 'ABC1234567',
        name: 'Rajesh Kumar',
        age: 45,
        gender: 'Male',
        ward: '12',
        booth: 45,
        street: 'MG Road',
        family: 'F-1234',
        phone: '9876543210',
        tags: ['Government Staff', 'Influencer'],
        lastVisit: '2025-11-20',
        sentiment: 'Positive'
      },
      {
        id: '2',
        epicId: 'DEF7654321',
        name: 'Lakshmi Devi',
        age: 68,
        gender: 'Female',
        ward: '8',
        booth: 28,
        street: 'Temple Street',
        family: 'F-5678',
        tags: ['Senior Citizen', 'Pension'],
        lastVisit: '2025-10-15',
        sentiment: 'Neutral'
      },
      {
        id: '3',
        epicId: 'GHI9876543',
        name: 'Priya Sharma',
        age: 19,
        gender: 'Female',
        ward: '18',
        booth: 102,
        street: 'College Road',
        family: 'F-9012',
        tags: ['First Time Voter', 'Student'],
        sentiment: 'Positive'
      },
      {
        id: '4',
        epicId: 'JKL1357924',
        name: 'Venkatesh Reddy',
        age: 52,
        gender: 'Male',
        ward: '22',
        booth: 156,
        street: 'Gandhi Nagar',
        family: 'F-3456',
        phone: '9123456789',
        tags: ['Business Owner', 'Influencer'],
        lastVisit: '2025-11-28',
        sentiment: 'Positive'
      },
      {
        id: '5',
        epicId: 'MNO2468135',
        name: 'Sunita Rao',
        age: 38,
        gender: 'Female',
        ward: '5',
        booth: 18,
        street: 'Market Street',
        family: 'F-7890',
        phone: '9988776655',
        tags: ['Working Professional'],
        lastVisit: '2025-09-10',
        sentiment: 'Neutral'
      }
    ];

    this.filteredVoters = [...this.voters];
  }

  loadFamilies() {
    this.families = [
      {
        id: 'F-1234',
        familyName: 'Kumar Family',
        address: 'MG Road, Ward 12',
        ward: '12',
        members: 5,
        voters: 4,
        tags: ['Government Staff']
      },
      {
        id: 'F-5678',
        familyName: 'Devi Family',
        address: 'Temple Street, Ward 8',
        ward: '8',
        members: 3,
        voters: 2,
        tags: ['Senior Citizens', 'Pension']
      },
      {
        id: 'F-9012',
        familyName: 'Sharma Family',
        address: 'College Road, Ward 18',
        ward: '18',
        members: 4,
        voters: 3,
        tags: ['Students']
      }
    ];
  }

  applyFilters() {
    this.filteredVoters = this.voters.filter(voter => {
      const wardMatch = this.filterWard === 'all' || voter.ward === this.filterWard;
      const boothMatch = this.filterBooth === 'all' || voter.booth.toString() === this.filterBooth;
      const tagMatch = this.filterTag === 'all' || voter.tags.includes(this.filterTag);
      const searchMatch = this.searchTerm === '' || 
        voter.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        voter.epicId.toLowerCase().includes(this.searchTerm.toLowerCase());

      return wardMatch && boothMatch && tagMatch && searchMatch;
    });
  }

  viewVoter(voter: Voter) {
    console.log('View voter:', voter);
  }

  editVoter(voter: Voter) {
    console.log('Edit voter:', voter);
  }

  addVisit(voter: Voter) {
    console.log('Add visit for:', voter);
  }

  importVoters() {
    console.log('Import voters from EPIC');
  }

  exportData() {
    console.log('Export voter data');
  }
}
