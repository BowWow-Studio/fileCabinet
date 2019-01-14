import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  private readonly proxyurl = 'https://cors-anywhere.herokuapp.com/';
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const newReq = req.clone({url: this.proxyurl + req.url,headers:new HttpHeaders()});
    return next.handle(newReq);
  }
}
