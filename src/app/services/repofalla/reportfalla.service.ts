import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportfallaService {

  url = environment.routeGlobalNode;

  constructor(private http: HttpClient) { }

  crearReporte(param): Observable<any>{
    return this.http.post(`${this.url}/reporte-falla/create`,param)
  }

}
