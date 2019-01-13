import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpMethod } from './model/httpMethod.model';
import { Observer, Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  public sendRequest(url: string, method: HttpMethod): Observable<object> {
    switch (method) {
      case HttpMethod.GET : {
        return this.http.get(url);
        break;
      }
      case HttpMethod.POST : {
        return this.http.post(url, null);
        break;
      }
      case HttpMethod.PUT : {
        return this.http.put(url, null);
        break;
      }
      case HttpMethod.PATCH : {
        return this.http.patch(url, null);
        break;
      }
      case HttpMethod.DELETE : {
        return this.http.delete(url);
        break;
      }
      case HttpMethod.OPTIONS : {
        return this.http.options(url);
        break;
      }
      case HttpMethod.HEAD : {
        return this.http.head(url);
      }
    }
  }
}
