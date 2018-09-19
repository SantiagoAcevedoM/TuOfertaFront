import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrarService {

  URL: String = 'http://localhost:8070/ofertas/listar/filtro/';
  URL2: String = 'http://localhost:8090/negocios/listar/tiponegocio/';
  constructor(public http: Http) { }

  traerTipoOferta(tipo:string):Observable<any>{
    return this.http.get(this.URL+tipo)
  }

  traerTipoNegocio(tipon:string):Observable<any>{
    return this.http.get(this.URL2+tipon)
  }
}
