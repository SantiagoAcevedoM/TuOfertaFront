import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditarOfertaService {

  URL: string = 'http://localhost:8070/ofertas/editar';
  constructor(private http: Http) { }



  
  editarOferta ( oferta: any):Observable<any> {
    const body = JSON.stringify( oferta );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'

    });
    return this.http.put( this.URL,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
