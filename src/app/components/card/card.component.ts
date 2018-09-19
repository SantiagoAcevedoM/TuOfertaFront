import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ListarOfertasService } from '../../services/listar-ofertas.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { CrearOfertaService } from '../../services/crear-oferta.service';
import { EliminarOfertaService } from '../../services/eliminar-oferta.service';
import { EditarOfertaService } from '../../services/editar-oferta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  
  form: FormGroup;
  URLFoto:string;
  selectedOffer: any;

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
    info = {
      idnegocio: '',
      producto: '',
      id: ''
      };
      
      oferta2: any[] = [this.info];
      
      base2 = {
        oferta: this.oferta2
      }; 

      //Body editar

      
  // infooferta2 = {
  //   producto: '',
  //   idnegocio: '',
  //   foto: '',
  //   fecha_inicio: '',
  //   fecha_final: '',
  //   valor: '',
  //   descuento: '',
  //   detalle: ''
  //   };
    
  //   oferta3: any[] = [this.infooferta2];
    
  //   base3 = {
  //   oferta: this.oferta3
  //   }; 
    editOfferFormModel = {name: '', detail: null, price: null, discount: null}
     
    
  // ofertasany[];
  cod: string;
  Ofertas:any[];
  message:any;
  oferta_eliminar:any;
  constructor(private location:Location, private listarofertas:ListarOfertasService, private ruta:ActivatedRoute, 
    private registro: CrearOfertaService, private eliminar: EliminarOfertaService, private editar: EditarOfertaService, 
    private formBuilder: FormBuilder, public dialog: MatDialog,private afStorage: AngularFireStorage, private navegador:Router) { 
      this.Ofertas=[];
    this.ruta.params.subscribe(params=>{
      this.cod = params.id;
      console.log(params);
      console.log("id antes");

      this.infooferta['idnegocio'] = params.id;

      console.log(this.infooferta['idnegocio']);
    });
    console.log("id despues");

    console.log(this.infooferta['idnegocio']);

    this.form = formBuilder.group({productName: [null], productPrice:[null], productDetail:[null], discount:[null]})
  }


  ngOnInit() {
    this.traerOfertas();
  }

 regresar(){
  this.navegador.navigate(['/admin']);

}

 traerOfertas(){
   console.log('entro a traer ofertas')
  this.listarofertas.getOfertas(this.cod).subscribe(
    Response=>{
      this.Ofertas = Response.oferta;
      console.log(Response.oferta);
      console.log("Estas son las ofertas");
      console.log(Response);
    },error => {
      this.message = 'No se pudo traer las ofertas';
      console.log(this.message);
    });
}
limpiarCampos(){

  for(let o of this.oferta){
    o.producto = '';
  }

}

registrarOferta(){
  console.log("Entro al registro de oferta");
  console.log(this.base);
  this.infooferta['id'] = null;
  this.registro.registrarOferta(this.base).subscribe(
    Response=>{
      console.log(Response);
      window.alert("oferta registrada exitosamente");
      this.traerOfertas();
      this.limpiarCampos();

    },error =>{
      console.log(error);
    }
  )
}

seleccionarOferta(oferta:any){
  this.info.id = oferta.id;
  this.info.idnegocio = oferta.idnegocio;
  this.info.producto = oferta.producto;
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
seleccionarOfertaCrear(){
  this.infooferta.id = '';
  // this.infooferta.idnegocio = '';
  this.infooferta.producto = '';
  this.infooferta.descuento = '';
  this.infooferta.detalle = '';
  this.infooferta.fecha_final = '';
  this.infooferta.fecha_inicio= '';
  this.infooferta.foto = '';
  this.infooferta.tipo = '';
  // this.infooferta.foto= oferta.foto;
  this.infooferta.valor= '';
  console.log(this.infooferta);
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

// onEditOffer(event){
//   console.log(event.target.parentElement.parentElement)
//   this.openDialog();
// }

// openDialog(): void {
//   const dialogRef = this.dialog.open(EditOffertModalComponent, {
//     width: '1000px', height: '500px',
//     data: {base: this.base}
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('----------------------The dialog was closed');
//   });
// }

}
