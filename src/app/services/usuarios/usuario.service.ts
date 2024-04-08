import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.routeGlobalNode;

  constructor(private http: HttpClient) { }

  crearUsuario(param): Observable<any>{
    return this.http.post(`${this.url}/checkin/create`,param)
  }
}
