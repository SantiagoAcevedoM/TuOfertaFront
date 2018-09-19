import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarOfertaService {

  constructor(public http:HttpClient, private http2: Http) { }

  URL: string = 'http://localhost:8070/ofertas/eliminar';

  eliminarOferta(id:string):Observable<any>{
    return this.http.delete(this.URL);
  }

  eliminarOferta2 ( oferta: any):Observable<any> {
    const body = JSON.stringify( oferta );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'

    });
    return this.http2.delete( this.URL,  new RequestOptions({
      headers: headers,
      body: oferta
    })).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
