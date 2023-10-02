import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap } from 'rxjs/operators';
import {AccountService} from "../../services";

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector,private accountService: AccountService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        catchError(err => {
          if ([401, 403].includes(err.status) && this.accountService.userValue) {
            // auto logout if 401 or 403 response returned from api
            this.accountService.logout();
          }

          const error = err.error?.message || err.statusText;
          console.error(err);
          return throwError(() => error);
        }))
  }
}
