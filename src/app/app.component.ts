import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpMethod } from './model/httpMethod.model';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fileCabinet';
  public URL = '';
  public Method: HttpMethod = HttpMethod.GET;
  public result = '';
  constructor(private http: HttpServiceService) {}
  public httpMethodAndName: Array<[HttpMethod, string]> = [
    [HttpMethod.GET, 'GET'],
    [HttpMethod.POST, 'POST'],
    [HttpMethod.PUT, 'PUT'],
    [HttpMethod.PATCH, 'POST'],
    [HttpMethod.DELETE, 'DELETE'],
    [HttpMethod.OPTIONS, 'OPTIONS'],
    [HttpMethod.HEAD, 'HEAD']

  ];
  public sendRequest( url: string, method: HttpMethod) {
    this.http.sendRequest(this.URL, this.Method).subscribe(result => this.result = JSON.stringify(result));
  }
}
