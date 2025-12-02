import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TenantService } from '../../services/tenant.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-tenant-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './tenant-switcher.html',
  styleUrls: ['./tenant-switcher.scss']
})
export class TenantSwitcherComponent {
  constructor(public tenant: TenantService) {}
}
