import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  persona = {
    id:'',
    nombre: '',
    apellidos: '',
    rol:'',
    correo: '',
    telefono: '',
    genero: '',
    ciudad: '',
    estado: '',

  }
  estaLogeado:boolean;
  negocioActivo:string;
  nombreNegocio:string;
  ofertaActiva:string;
  constructor(public http: HttpClient, private navegador:Router) {
    this.estaLogeado = false;
   }

  URL: string = 'http://localhost:8091/personas/sesion';



  iniciarSesion(body:any){
    // console.log("este es el body que llego " + JSON.stringify(body));
    this.persona.id = body.id;
    this.persona.nombre= body.nombre;
    this.persona.apellidos= body.apellidos;
    this.persona.rol= body.rol;
    this.persona.correo= body.correo;
    this.persona.telefono= body.telefono;
    this.persona.genero= body.genero;
    this.persona.ciudad= body.ciudad;
    this.persona.estado= body.estado;
    // console.log(this.persona);
    this.estaLogeado = true;
    this.verificarRol();

  }

  cerrarSesion(){
    this.persona.id = '';
    this.persona.nombre= '';
    this.persona.apellidos= '';
    this.persona.rol= '';
    this.persona.correo= '';
    this.persona.telefono= '';
    this.persona.genero= '';
    this.persona.ciudad= '';
    this.persona.estado= '';    
    this.estaLogeado = false;
    this.navegador.navigate(['/']);

  }

  verificarRol(){
    if((this.persona.rol)=="Usuario"){
      this.navigateToUserPanel();
    }else if((this.persona.rol)=="Administrador"){
      this.navigateToAdminPanel();
    }else if((this.persona.rol)=="SuperAdmin"){
      this.navigateToSAPanel();
    }
  }

  navigateToUserPanel(){
    this.navegador.navigate(['/usuario']);
  }

  navigateToAdminPanel(){
    this.navegador.navigate(['/admin/']);
  }

  navigateToSAPanel(){
    this.navegador.navigate(['/super']);

  }
}
