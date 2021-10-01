import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((err: HttpErrorResponse) => {
          switch (err.status) {
            case 404:
              console.warn('404');
              break
            case 500:
              break;
            case 401:
              console.warn('Unauthorized error, processing. Subsequent errors may not be relevant.');
              break;
            case 403:
              // Navigation to 'access-denied' page is inappropriate. Let components handle it.
              break;
            default:
              break;
          }
          return throwError(err)

        })
      )
      ;
  }
}
