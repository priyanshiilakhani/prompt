import { Routes } from '@angular/router'
import { LandingLayout } from './layout/landing-layout/landing-layout';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((mod) => mod.Home),
    data: {
      title: 'Premium Landing Pages',
    },
  },
  {
    path: 'home',
    component: LandingLayout,
    loadChildren: () => import('./landing/landing.route').then((mod) => mod.LANDING_ROUTES),
  },
];
