import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register-veterinarian',
    loadComponent: () => import('./auth/register-veterinarian/register-veterinarian').then(m => m.RegisterVeterinarianComponent)
  },
];
