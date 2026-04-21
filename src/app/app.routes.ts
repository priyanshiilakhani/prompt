import { Routes } from '@angular/router'

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
    loadChildren: () => import('./landing/landing.route').then((mod) => mod.LANDING_ROUTES),
  },
];
