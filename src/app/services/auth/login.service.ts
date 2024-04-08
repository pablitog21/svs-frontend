import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.routeGlobalNode;

  constructor(private http: HttpClient) { }

  openLogin(params): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, params);
  }
}
