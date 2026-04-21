import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then((mod) => mod.Home),
    data: {
      title: 'Prompt - Tailwind CSS Multipurpose One Page Landing Template',
    },
  },

]
