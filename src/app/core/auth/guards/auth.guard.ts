import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  createUrlTreeFromSnapshot,
} from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  return inject(AuthService).isAuthenticated$.pipe(
    tap((isAuthenticated) =>
      isAuthenticated ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
    )
  );
};
