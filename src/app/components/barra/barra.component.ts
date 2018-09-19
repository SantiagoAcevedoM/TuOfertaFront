import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {


  constructor(private sesion:SesionService) { 
    
  }

  ngOnInit() {
    
  }
  cerrarSesion(){
    this.sesion.cerrarSesion();
  }

}
