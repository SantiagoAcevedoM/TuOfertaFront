import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { Http, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ListarNegocioService {

  URL: string = 'http://localhost:8090/negocios/';
  constructor(public http: HttpClient, private http2: Http) { }



getNegocio(id:String):Observable<any>{
  return this.http.get(this.URL+"listar/"+id);

  }

  /*editarNegocio(negocio:any):Observable<any>{

    console.log("entro");
    console.log(negocio);
    return this.http.put(this.URL+"editar", negocio[0]);
  }*/
    editarNegocio(negocio:any):Observable<any>{

    console.log("entro");
    console.log(negocio);
    return this.http.put(this.URL+"editar", negocio[0],{
      headers: {'Content-Type':'application/json','Accept':'application/json'}

    });
  }


  editarNegocio2 ( negocio: any):Observable<any> {
    const body = JSON.stringify( negocio );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'

    });
    return this.http2.put( this.URL+"editar",  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
