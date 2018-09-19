import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL: string = 'http://localhost:8091/personas/sesion';

  constructor(public http: HttpClient) {
    console.log("Servicio entro");
   }

   postLogin(body:any){
     console.log(body);
     return this.http.post(this.URL, body);

   }
}
