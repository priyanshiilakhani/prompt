import { Routes } from '@angular/router';
import { LandingLayout } from './layout/landing-layout/landing-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';

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
  {
    path: 'account',
    component: AdminLayout,
    loadChildren: () => import('./admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () => import('./auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
];
