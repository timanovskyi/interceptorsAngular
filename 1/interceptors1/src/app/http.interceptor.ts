import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const hardCodedToken = '1111';
    const reqWithAuth = request.clone({
      setHeaders: {
        Authorization: `Bearer ${hardCodedToken}`
      }
    })

    return next.handle(reqWithAuth);
  }
}
