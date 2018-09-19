import { Component, OnInit } from '@angular/core';
import { EliminarNegocioService } from '../../services/eliminar-negocio.service';
import { ListarNegociosService } from '../../services/listar-negocios.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { ListarNegocioService } from '../../services/listar-negocio.service';

@Component({
  selector: 'app-negocios-super',
  templateUrl: './negocios-super.component.html',
  styleUrls: ['./negocios-super.component.css']
})
export class NegociosSuperComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  cod: string;
  Negocios:any;
  message:any;

  //objeto negocio
  infonegocio = {
    idadmin:'',
    idnegocio:'',
    nombre_negocio: '',
    nit: '',
    telefono: '',
    correo: '',
    tipo: '',
    foto: '',
    ubicacion: '',
    latitud: '',
    longitud: '',
    detalle: ''
    };
    
    negocio: any[] = [this.infonegocio];
    
    base = {
    negocio: this.negocio
    }; 
  constructor(public listarn:ListarNegociosService,private afStorage: AngularFireStorage,
    public eliminar:EliminarNegocioService, public ruta:ActivatedRoute, private editar:ListarNegocioService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.cod = params.id;
    });
  }

  ngOnInit() {
    this.traerNegociosSuper();
  }

traerNegociosSuper(){
  this.listarn.getAllNegocios().subscribe(
    Response=>{
      this.Negocios = Response.negocio;
      console.log(Response.negocio);
      console.log(Response);
    },error => {
      this.message = "No se pudo traer el usuario";
      console.log(this.message);
    });
}


eliminarNegocios(id:string){
  console.log(id);
  this.eliminar.eliminarNegocio(id).subscribe(data=>{
    console.log(data);
    this.traerNegociosSuper();
  })
}

seleccionarNegocioEditar(negocio:any){
  this.infonegocio.idadmin = negocio.idadmin;
  this.infonegocio.idnegocio = negocio.idnegocio;
  this.infonegocio.nombre_negocio = negocio.nombre_negocio;
  this.infonegocio.nit = negocio.nit;
  this.infonegocio.telefono = negocio.telefono;
  this.infonegocio.correo = negocio.correo;
  this.infonegocio.tipo= negocio.tipo;
  this.infonegocio.foto = negocio.foto;
  this.infonegocio.ubicacion = negocio.ubicacion;
  this.infonegocio.latitud= negocio.latitud;
  this.infonegocio.longitud= negocio.longitud;
  this.infonegocio.detalle= negocio.detalle;


  console.log("esta es la oferta a editar");
  console.log(this.infonegocio);
}

subirFoto(event){
    
  const  id  =  Math.random().toString(36).substring(2);
  this.ref  =  this.afStorage.ref(id);
  this.task  =  this.ref.put(event.target.files[0]);
  this.task.then(()  =>  {
    this.ref.getDownloadURL().subscribe((url)  =>  {
      this.infonegocio.foto = url;
    });
  });
}

editarNegocio(){
  // this.base3.oferta[0].id= id;
  console.log("este es i: ");
 //  console.log(i);
   console.log("este es el negocio a editar");
   console.log(this.base);
   this.editar.editarNegocio2(this.base).subscribe(data=>{
     console.log("este es el negocio a editar");
     console.log(this.base);
     this.traerNegociosSuper();
   })
 }
}
