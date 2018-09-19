import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { SesionService } from '../../services/sesion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentContainer: String;
  constructor(public ruta: ActivatedRoute, private sesion:SesionService, private navegador:Router) { 

    if(this.sesion.estaLogeado==false || this.sesion.persona.rol!="Administrador"){
      window.alert("No tiene los permisos para acceder a esta vista");
      this.navegador.navigate(['/']);

    }
  }

  ngOnInit() { }

  switchContainer(containerName) {

    switch  (containerName) {
      case  '1':
        this.currentContainer  =  'perfil';
        break;
      case  '2':
        this.currentContainer  =  'crear-neg';
        break;
      case  '3':
        this.currentContainer  =  'negocios';
        break;
      case '5':
        this.currentContainer = 'editar-neg';
        break;
      default:
        this.currentContainer  =  'informacion';

    }
  }
}
