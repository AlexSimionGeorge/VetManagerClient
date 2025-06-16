import { Routes } from '@angular/router';

export const ownerRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./owner-layout').then(m => m.OwnerLayout),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/owner-home').then(m => m.OwnerHome),
      },
    ]
  }
];
