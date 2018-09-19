import { Component, OnInit } from '@angular/core';
import { ListarOfertasService } from '../../services/listar-ofertas.service';
import { EliminarOfertaService } from '../../services/eliminar-oferta.service';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { EditarOfertaService } from '../../services/editar-oferta.service';

@Component({
  selector: 'app-ofertas-super',
  templateUrl: './ofertas-super.component.html',
  styleUrls: ['./ofertas-super.component.css']
})
export class OfertasSuperComponent implements OnInit {

  constructor(private listarofertas: ListarOfertasService, private eliminar:EliminarOfertaService, 
    private afStorage: AngularFireStorage, private editar:EditarOfertaService) { }
  message: string;
  Ofertas: any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  //objeto oferta
  infooferta = {
    producto:'',
    idnegocio:'',
    id:'',
    foto:'',
    fecha_inicio:'',
    fecha_final:'',
    valor:'',
    tipo: '',
    descuento:'',
    detalle:''
    };
    
    oferta: any[] = [this.infooferta];
    
    base = {
    oferta: this.oferta
    }; 
  //objeto a eliminar
  info =  {
    idnegocio:  '',
    producto: '',
    id:  ''
  };

  oferta2:  any[]  =  [this.info];

  base2 =  {
    oferta:  this.oferta2
  };

  ngOnInit() {
    this.traerOfertas();
  }

  traerOfertas() {
    console.log('entro a traer ofertas')
    this.listarofertas.getAllOfertas().subscribe(
      Response => {
        this.Ofertas = Response.oferta;
        console.log(Response.oferta);
        console.log("Estas son las ofertas");
        console.log(Response);
      }, error => {
        this.message = 'No se pudo traer las ofertas';
        console.log(this.message);
      });
  }

  subirFoto(event){
    
    const  id  =  Math.random().toString(36).substring(2);
    this.ref  =  this.afStorage.ref(id);
    this.task  =  this.ref.put(event.target.files[0]);
    this.task.then(()  =>  {
      this.ref.getDownloadURL().subscribe((url)  =>  {
        this.infooferta.foto = url;
      });
    });
  }

  eliminarOferta(){
    console.log("esta es la base");
    console.log(this.base2);
    this.eliminar.eliminarOferta2(this.base2).subscribe(data=>{
      console.log(data);
      alert("la oferta ha sido eliminada");
      this.traerOfertas();
    }, err => {
      alert("la oferta no ha podido ser eliminada");
  
    })
  }
  seleccionarOferta(oferta: any) {
    console.log("entro a seleccionar oferta");
    this.info.id = oferta.id;
    this.info.idnegocio = oferta.idnegocio;
    this.info.producto = oferta.producto;
    this.eliminarOferta();
  }
  seleccionarOfertaEditar(oferta:any){
    this.infooferta.id = oferta.id;
    this.infooferta.idnegocio = oferta.idnegocio;
    this.infooferta.producto = oferta.producto;
    this.infooferta.descuento = oferta.descuento;
    this.infooferta.detalle = oferta.detalle
    this.infooferta.fecha_final = oferta.fecha_final;
    this.infooferta.fecha_inicio= oferta.fecha_inicio;
    this.infooferta.foto = oferta.foto;
    this.infooferta.tipo = oferta.tipo;
    // this.infooferta.foto= oferta.foto;
    this.infooferta.valor= oferta.valor;
    console.log("esta es la oferta a editar");
    console.log(this.infooferta);
  }

  
editarOfertas(){
  // this.base3.oferta[0].id= id;
  console.log("este es i: ");
 //  console.log(i);
   console.log("esta es la oferta a editar");
   console.log(this.base);
   this.editar.editarOferta(this.base).subscribe(data=>{
     console.log("esta es la oferta a editar");
     console.log(this.base);
     this.traerOfertas();
   })
 }

}
