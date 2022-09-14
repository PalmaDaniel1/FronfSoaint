import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDto } from '../other/request';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  _request: RequestDto;

  constructor(
    private http: HttpClient
  ) { }

  postOperacion(_request): Observable<any>{
    return this.http.post("http://localhost:8888/soaint/operaciones", _request);
  }
}
