import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarOfertasService {

  URL: string = 'http://localhost:8070/ofertas/listar/';
  constructor(public http: HttpClient) {

  }

  getOfertas(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  getAllOfertas(): Observable<any> {
    console.log(this.URL);
    return this.http.get(this.URL);
  }
  getAllOfertasActivas(): Observable<any> {
    console.log(this.URL+"activas");
    return this.http.get(this.URL);
  }

  getAllOfertasByTipo(tipo): Observable<any> {
    return this.http.get(this.URL + "tiponegocio/" + tipo);
  }

  getAllOfertasByNegocioAndTipo(negocio, tipo): Observable<any>{
    return this.http.get(this.URL + "filtro/" + negocio+"/"+tipo);
  }

  getAllOfertasActivasByNegocioAndTipo(negocio, tipo): Observable<any>{
    return this.http.get(this.URL+"filtro/activas/"+negocio+"/"+tipo);
  }
}
