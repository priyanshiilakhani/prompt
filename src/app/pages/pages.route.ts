import { Route } from '@angular/router';

export const PAGES_ROUTES: Route[] = [
  {
    path: 'company',
    loadComponent: () => import('./company/company').then((mod) => mod.Company),
    data: { title: 'Company' },
  },
  {
    path: 'career',
    loadComponent: () => import('./career/career').then((mod) => mod.Career),
    data: { title: 'Career' },
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pricing/pricing').then((mod) => mod.Pricing),
    data: { title: 'Pricing' },
  },
  {
    path: 'help',
    loadComponent: () => import('./helps/helps').then((mod) => mod.Helps),
    data: { title: 'Help' },
  },
  {
    path: 'portfolio/grid',
    loadComponent: () => import('./portfolio/grid/grid').then((mod) => mod.Grid),
    data: { title: 'Help' },
  },
  {
    path: 'portfolio/masonry',
    loadComponent: () => import('./portfolio/masonry/masonry').then((mod) => mod.Masonry),
    data: { title: 'Masonry' },
  },
  {
    path: 'portfolio/item',
    loadComponent: () => import('./portfolio/item/item').then((mod) => mod.Item),
    data: { title: 'item' },
  }
];
