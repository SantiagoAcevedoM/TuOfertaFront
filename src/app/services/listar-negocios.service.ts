import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable, Subscription } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarNegociosService {

  URL: string = 'http://localhost:8099/orquestador/listar';
  constructor(public http: HttpClient) { }
  URL2: string = 'http://localhost:8090/negocios/listar';


getNegocios(id:string):Observable<any>{
  return this.http.get(this.URL+"/idadmin/"+id);

  }

getAllNegocios():Observable<any>{
  return this.http.get(this.URL2);
}
getAllNegociosByTipo(tipo):Observable<any>{
  return this.http.get(this.URL2+"/tiponegocio/"+tipo);
}
}