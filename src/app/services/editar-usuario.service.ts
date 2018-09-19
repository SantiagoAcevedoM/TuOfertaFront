import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditarUsuarioService {
  URL: string = 'http://localhost:8091/personas/editar';

  constructor(private http: Http) { }



  
  editarPersona ( persona: any):Observable<any> {
    console.log("entro a editar persona");

    console.log(persona);
    const body = JSON.stringify( persona );
    const headers = new Headers ( {
        'Content-Type': 'application/json'

    });
    return this.http.put( this.URL,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
