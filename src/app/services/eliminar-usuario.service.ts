import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EliminarUsuarioService {


  URL: string = 'http://localhost:8091/personas/eliminar';
  constructor(private http2: Http) { }




  eliminarPersona ( oferta: any):Observable<any> {
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

