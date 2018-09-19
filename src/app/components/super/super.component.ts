import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  currentContainer: String;

  constructor(private navegador:Router, private sesion:SesionService) { 
    if(this.sesion.estaLogeado==false || this.sesion.persona.rol != "SuperAdmin"){
      window.alert("Debes iniciar sesión para acceder a esta vista");
      this.navegador.navigate(['/']);

    }
  }

  ngOnInit() {
  }

  switchContainer(containerName) {
    switch  (containerName) {
      case  '1':
        this.currentContainer  =  'perfil';
        break;
      case  '2':
        this.currentContainer  =  'listar';

        break;
      case  '3':
        this.currentContainer  =  'negocios-all';
        break;
      case '4':
        this.currentContainer = 'ofertas';
        break;
      default:
        this.currentContainer  =  'informacion';

    }
  }
}
