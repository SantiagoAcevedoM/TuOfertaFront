import { Component, OnInit } from '@angular/core';
import { ListarNegociosService } from '../../services/listar-negocios.service';
import { EliminarNegocioService } from '../../services/eliminar-negocio.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { ListarNegocioService } from '../../services/listar-negocio.service';
import { SesionService } from '../../services/sesion.service';
import { CrearNegocioService } from '../../services/crear-negocio.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  // cod: string;
  Negocios:any;
  message:any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
   //objeto negocio
   infonegocio = {
    idadmin: this.sesion.persona.id,
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
    titulo:string;
    negocio: any[] = [this.infonegocio];
    
    base = {
    negocio: this.negocio
    };

  constructor(public listarn:ListarNegociosService,private afStorage: AngularFireStorage,
    public eliminar:EliminarNegocioService, public ruta:ActivatedRoute, private editar:ListarNegocioService, 
    private sesion:SesionService, private reg: CrearNegocioService) 
    { 
      this.traerNegocios();

    // this.ruta.params.subscribe(params=>{
    //   this.cod = params.id;
    // });
    // alert(this.infonegocio.idnegocio );


  }

  ngOnInit() {
    if(this.infonegocio.idnegocio ==''){
      this.limpiarModal();
     
    
    }
  }

  limpiarModal(){

    this.infonegocio = {
      idadmin: this.sesion.persona.id,
      idnegocio:'',
      nombre_negocio: '',
      nit: '',
      telefono: '',
      correo: '',
      tipo: '',
      foto: 'https://firebasestorage.googleapis.com/v0/b/oferta-db2d5.appspot.com/o/default.jpg?alt=media&token=5b48032a-8d8c-4065-bbbe-eff5d22d7a68',
      ubicacion: '',
      latitud: '',
      longitud: '',
      detalle: ''
      };
      this.negocio = [this.infonegocio];


    // this.infonegocio.idadmin = '';
    // this.infonegocio.idnegocio = '';
    // this.infonegocio.nombre_negocio = '';
    // this.infonegocio.nit = '';
    // this.infonegocio.telefono = '';
    // this.infonegocio.correo = '';
    // this.infonegocio.tipo= '';
    // this.infonegocio.foto = "https://firebasestorage.googleapis.com/v0/b/oferta-db2d5.appspot.com/o/default.jpg?alt=media&token=5b48032a-8d8c-4065-bbbe-eff5d22d7a68";
    // this.infonegocio.ubicacion = '';
    // this.infonegocio.latitud=  '';
    // this.infonegocio.longitud= '';
    // this.infonegocio.detalle= '';
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
traerNegocios(){
  this.listarn.getNegocios(this.sesion.persona.id).subscribe(
    Response=>{
      this.Negocios = Response.negocio;
      console.log(Response.negocio);
      console.log(Response);
    },error => {
      this.message = "No se pudo traer el usuario";
      console.log(this.message);
    });
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

crearNegocio(lat, lng) {
  console.log('latitud:'  + lat);
  console.log('longitud:'  + lng);
  this.infonegocio['latitud']  = lat;
  this.infonegocio['longitud']  = lng;
  this.infonegocio['idnegocio']  = null;
  this.infonegocio.idadmin = this.sesion.persona.id;
  console.log("este es el negocio a crear "+this.base);
  this.reg.registrarNegocio(this.base).subscribe(
    
    Response => {
      // console.log("infonego");
      // console.log(this.infonego);
      // console.log(Response);
      window.alert("Negocio creado exitosamente");
      // this.navegador.navigate(['/admin']);

    }, error => {
      console.log(error);
    }
  )
  this.limpiarModal();

  this.traerNegocios();
}

eliminarNegocios(id:string){
  console.log(id);
  this.eliminar.eliminarNegocio(id).subscribe(data=>{
    console.log(data);
    this.traerNegocios();
  })
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
     this.limpiarModal();

     this.traerNegocios();
   })
 }

}
