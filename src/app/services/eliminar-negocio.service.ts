import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EliminarNegocioService {

  constructor(public http:HttpClient) { }

  URL: string = 'http://localhost:8090/negocios/eliminar/';

  eliminarNegocio(id:string):Observable<any>{
    return this.http.delete(this.URL +id);
  }
}

