import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListarService {
variable:any ={
  "persona": [
    {
	"id": "0",
	"rol": "SuperAdmin",
	"estado": "activo",
	"token": "SuperAdmin"
	}
]
}
bodyrol:any ={
  "persona": [
    {
      "id": "7",
      "rol": "Administrador",
      "estado": "activo",
      "token": "TOKEN"
	}
]
}
bodyusuarios:any ={
  "persona": [
    {
      "id": "7",
      "rol": "Usuario",
      "estado": "activo",
      "token": "TOKEN"
	}
]
}
  constructor(public http: HttpClient) { 
    
  }

  URL: string = 'http://localhost:8091/personas/listar';

  getPersonas():Observable<any>{
    return this.http.post(this.URL, this.variable);

  }

  getAdministradores():Observable<any>{
    return this.http.post(this.URL+"/rol", this.bodyrol);

  }

  
  getUsuarios():Observable<any>{
    return this.http.post(this.URL+"/rol", this.bodyusuarios);

  }
}
