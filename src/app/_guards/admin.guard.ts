import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../_services/auth.service";
import {map} from "rxjs";

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.currentUser$.pipe(
    map(user => {
      if (user?.role === 'Admin') {
        return true;
      }
      else {
        return false;
      }
    })
  )
};
