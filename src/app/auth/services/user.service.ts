import { Injectable, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LoggedInUser } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private platformId = inject(PLATFORM_ID);

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getAccessToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('access');
  }

  getCurrentUser(): LoggedInUser | null {
    if (!this.isBrowser()) return null;
    const userJson = localStorage.getItem('user');
    if (!userJson) return null;
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken() && !!this.getCurrentUser();
  }

  getUserRole(): 'owner' | 'veterinarian' | null {
    return this.getCurrentUser()?.role ?? null;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }
}
