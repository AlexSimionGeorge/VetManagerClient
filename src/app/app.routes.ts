import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register-veterinarian',
    loadComponent: () => import('./auth/register-veterinarian/register-veterinarian').then(m => m.RegisterVeterinarianComponent)
  },
  {
    path: 'register-owner',
    loadComponent: () => import('./auth/register-owner/register-owner').then(m => m.RegisterOwnerComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then(m => m.LoginComponent)
  }

];
