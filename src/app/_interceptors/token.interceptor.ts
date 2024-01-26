import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../_services/auth.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let token;
  authService.currentUser$.subscribe((user) =>{
    token = user?.token;
  })

  req = req.clone({
    setHeaders: {
      'X-Token' : token ?  `${token}` : '',
    },
  });
  return next(req);
};
