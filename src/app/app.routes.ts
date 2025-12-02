import { Routes } from '@angular/router';
import { PoliticianHubDashboardComponent } from './politicianhub-dashboard/politicianhub-dashboard';
import { GrievancesComponent } from './features/grievances/grievances';
import { VotersComponent } from './features/voters/voters';
import { WorksComponent } from './features/works/works';
import { VolunteersComponent } from './features/volunteers/volunteers';
import { CommunicationsComponent } from './features/communications/communications';
import { MediaComponent } from './features/media/media';
import { EventsComponent } from './features/events/events';
import { AnalyticsComponent } from './features/analytics/analytics';

export const routes: Routes = [
  { path: '', component: PoliticianHubDashboardComponent },
  { path: 'dashboard', component: PoliticianHubDashboardComponent },
  { path: 'grievances', component: GrievancesComponent },
  { path: 'voters', component: VotersComponent },
  { path: 'works', component: WorksComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: 'communications', component: CommunicationsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'events', component: EventsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '**', redirectTo: '' }
];
