import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrearOfertaService {
  RegistroURL = 'http://localhost:8070/ofertas/registrar';
  
  constructor( private http: Http) {
   }

  registrarOferta( registro: any){
    const body = JSON.stringify( registro );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'

    });
    return this.http.post( this.RegistroURL,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
