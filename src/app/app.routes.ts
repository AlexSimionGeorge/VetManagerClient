import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { VeterinarianGuard } from './auth/guards/veterinarian.guard';
import { OwnerGuard } from './auth/guards/owner.guard';

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
    path: 'owner',
    canActivate: [AuthGuard, OwnerGuard],
    loadChildren: () => import('./pages/owners/owner.routes').then(m => m.ownerRoutes),
  },
  {
    path: 'vet',
    canActivate: [AuthGuard, VeterinarianGuard],
    loadChildren: () => import('./pages/veterinarians/vet.routes').then(m => m.vetRoutes),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
