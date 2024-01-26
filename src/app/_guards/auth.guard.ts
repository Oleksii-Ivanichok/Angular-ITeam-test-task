import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../_services/auth.service";
import {map} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.currentUser$.pipe(
    map(user => {
      if (user) {
        if(state.url === '/login'){
          router.navigateByUrl('/');
          return false;
        }
        return true;
      }
      else {
        if(state.url === '/login'){
          return true;
        }
        router.navigateByUrl('/login');
        return false;
      }
    })
  )
};
