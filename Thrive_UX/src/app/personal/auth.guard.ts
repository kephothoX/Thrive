import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state): boolean => {

  if (Boolean(window.sessionStorage.getItem('isAuthenticated'))) {

    return true;

  } else {
    window.location.href = '/personal/login';

    return false
  }
  
};

