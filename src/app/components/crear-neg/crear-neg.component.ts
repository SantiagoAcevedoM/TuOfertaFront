import { Component, OnInit } from '@angular/core';
import { CrearNegocioService } from '../../services/crear-negocio.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AngularFireUploadTask, AngularFireStorageReference, AngularFireStorage } from 'angularfire2/storage';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-crear-neg',
  templateUrl: './crear-neg.component.html',
  styleUrls: ['./crear-neg.component.css']
})
export class CrearNegComponent implements OnInit {
  // cod: string;
  constructor(private reg: CrearNegocioService, private ruta: ActivatedRoute, private afStorage: AngularFireStorage,
    private sesion:SesionService, private navegador:Router) {


    // this.ruta.params.subscribe(params => {
    //   this.cod = params.id;
    // });
    // this.infonego['idadmin'] = this.cod;

    // console.log(this.cod);
    // console.log(this.infonego['idadmin']);
  }
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  infonego   =  {
    idadmin: this.sesion.persona.id,
    nombre_negocio: '',
    nit: '',
    telefono: '',
    correo: '',
    tipo: '',
    foto: '',
    ubicacion: '',
    detalle: '',
    latitud: '',
    longitud: ''
  };

  negocio:  any[]  =  [this.infonego];

  base  =  {
    negocio:  this.negocio
  };

  ngOnInit() {
  }

  crear_negocio(lat, lng) {
    console.log('latitud:'  + lat);
    console.log('logintud:'  + lng);
    this.infonego['latitud']  = lat;
    this.infonego['longitud']  = lng;
    this.reg.registrarNegocio(this.base).subscribe(
      
      Response => {
        // console.log("infonego");
        // console.log(this.infonego);
        // console.log(Response);
        window.alert("Negocio creado exitosamente");
        this.navegador.navigate(['/admin']);

      }, error => {
        console.log(error);
      }
    )
  }

  subirFoto(event){
    
    const  id  =  Math.random().toString(36).substring(2);
    this.ref  =  this.afStorage.ref(id);
    this.task  =  this.ref.put(event.target.files[0]);
    this.task.then(()  =>  {
      this.ref.getDownloadURL().subscribe((url)  =>  {
        this.infonego.foto = url;
      });
    });
  }

}
