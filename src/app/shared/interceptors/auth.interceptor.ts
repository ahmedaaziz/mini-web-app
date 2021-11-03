import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private auth:AuthService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TokenId = localStorage.getItem('user_token');

      console.log(TokenId);
      request = request.clone({
        headers: request.headers.set('Authorization',`Bearer ${TokenId}`)
      })

    return next.handle(request);

  }
}

export const AuthInterceptorProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
