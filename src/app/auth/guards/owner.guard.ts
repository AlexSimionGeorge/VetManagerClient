import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const OwnerGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  const role = userService.getUserRole();

  if (role !== 'owner') {
    // Redirect to correct home page based on role
    if (role === 'veterinarian') {
      router.navigate(['/vet/home']);
    } else {
      router.navigate(['/login']);
    }
    return false;
  }

  return true;
};
