import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesactivarUsuarioService {
public headers: HttpHeaders;
  variable:any;
userBody(numero:String){
  this.variable ={
    "persona": [
      {
    "id": numero,
    "rol": "SuperAdmin",
    "estado": "activo",
    "token": "SuperAdmin"
    }
  ]
  }
  return this.variable;
}
variables:any ={
  "persona": [
    {
	"id": "0",
	"rol": "SuperAdmin",
	"estado": "activo",
	"token": "SuperAdmin"
	}
]
}
  constructor(public http: HttpClient) { 
    
  }

  URL: string = 'http://localhost:8090/personas/eliminar';

  DesactivarPersona(numero:String):Observable<any>{
    //let headers;
    this.variable ={
      "persona": [
        {
      "id": numero,
      "rol": "SuperAdmin",
      "estado": "activo",
      "token": "SuperAdmin"
      }
    ]
    }
    return this.http.delete(this.URL, this.variable);

  }
}
