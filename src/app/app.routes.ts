import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'usa', loadChildren: () => import('./features/north-america/usa/usa.routes').then(m => m.routes) },
  { path: 'france', loadChildren: () => import('./features/europe/france/france.routes').then(m => m.routes) },
  { path: '**', redirectTo: 'france' }
];
