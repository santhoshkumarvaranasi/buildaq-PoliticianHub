import { Component, signal, OnInit, inject, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { TenantSwitcherComponent } from './core/components/tenant-switcher/tenant-switcher';
import { MaterialModule } from './core/material.module';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TenantSwitcherComponent, MaterialModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('buildaq-politicianhub');
  isMobile = false;
  
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
    
    // Close sidenav on navigation in mobile mode
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobile && this.sidenav) {
        this.sidenav.close();
      }
    });
  }

  private checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit() {
    // Check for auth token from shell app
    const urlParams = new URLSearchParams(window.location.search);
    const authToken = urlParams.get('authToken');
    
    if (authToken) {
      // Store the auth token for API calls
      localStorage.setItem('shellAuthToken', authToken);
      // Also store under the standard key used by ApiService/auth interceptor
      localStorage.setItem('auth_token', authToken);
      
      // Notify parent frame (shell) that we're ready
      if (window.parent !== window) {
        window.parent.postMessage({ type: 'schools-ready', token: authToken }, '*');
      }
      
      // Remove token from URL for security
      const url = new URL(window.location.href);
      url.searchParams.delete('authToken');
        window.history.replaceState({}, '', url.pathname + url.hash);
    }

      // If shell requested a specific inner route via ?goto=..., navigate after boot
      const goto = urlParams.get('goto');
      if (goto) {
        try {
          // navigate relative to the remote root
          setTimeout(() => {
            try { this.router.navigate([goto]); } catch (e) { console.warn('goto navigation failed', e); }
          }, 50);
        } catch (e) {
          console.warn('Failed to process goto query param', e);
        }
      }
  }
}
