import { Routes } from '@angular/router';

export const vetRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./vet-layout').then(m => m.VetLayout),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/vet-home').then(m => m.VetHome),
      },
    ]
  }
];
