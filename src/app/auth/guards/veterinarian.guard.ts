import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const VeterinarianGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  const role = userService.getUserRole();

  if (role !== 'veterinarian') {
    if (role === 'owner') {
      router.navigate(['/owner/home']);
    } else {
      router.navigate(['/login']);
    }
    return false;
  }

  return true;
};
