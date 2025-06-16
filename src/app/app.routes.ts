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
  },
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then(m => m.LandingComponent)
  },
  {
    path: 'owner-home',
    loadComponent: () => import('./pages/owners/home/owner-home').then(m => m.OwnerHome)
  },
  {
    path: 'vet-home',
    loadComponent: () => import('./pages/veterinarians/home/vet-home').then(m => m.VetHome)
  }
];
