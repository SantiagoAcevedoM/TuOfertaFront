
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { ListarNegocioService } from '../../services/listar-negocio.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AngularFireUploadTask, AngularFireStorageReference, AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-editar-negocio',
  templateUrl: './editar-negocio.component.html',
  styleUrls: ['./editar-negocio.component.css']
})
export class EditarNegocioComponent implements OnInit {




  infonego = {
    idnegocio: '',
    idadmin: '',
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
    
    negocio: any[] = [this.infonego];
    
    base = {
      negocio: this.negocio
    }; 

    cod:any;

    negocioEdit: any;

  constructor(public http:HttpClient, public listar: ListarNegocioService, public router: ActivatedRoute, public route: Router, 
    private afStorage: AngularFireStorage) { 
    this.router.params.subscribe(params => { 
     // this.listar.getNegocio(params)
     this.cod = params.id;
     listar.getNegocio(params.id).subscribe(
       data=>{
        console.log(data);
        for(const negocio of data['negocio']){
          this.negocioEdit = negocio;
          this.infonego['idnegocio']= negocio.idnegocio;
          this.infonego['idadmin']= negocio.idadmin;
          this.infonego['nombre_negocio']=negocio.nombre_negocio;
          this.infonego['nit']=negocio.nit;
          this.infonego['telefono'] = negocio.telefono;
          this.infonego['correo'] = negocio.correo;
          this.infonego['tipo'] = negocio.tipo;
          this.infonego['foto'] = negocio.foto;
          this.infonego['ubicacion'] = negocio.ubicacion;
          this.infonego['detalle'] = negocio.detalle;
          this.infonego['latitud'] = negocio.latitud;
          this.infonego['longitud'] = negocio.longitud;


        }
       },error=>{

        console.log(error);

     });
     console.log(params.idnegocio);
    })
      
    }

    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;

    ngOnInit() {
    }
  
    editar_negocio(){
      console.log(this.base);
      this.listar.editarNegocio2(this.base).subscribe(data=>{
        console.log(data);
        this.route.navigate(['admin', this.cod]); 
      });
    }

    editar(lat,lng){
      this.infonego['latitud'] = lat;
          this.infonego['longitud'] = lng;
      this.editar_negocio();
    }
    
  subirFoto(event){
    
    const  id  =  Math.random().toString(36).substring(2);
    this.ref  =  this.afStorage.ref(id);
    this.task  =  this.ref.put(event.target.files[0]);
    this.task.then(()  =>  {
      this.ref.getDownloadURL().subscribe((url)  =>  {
        this.infonego['foto']  = url;
      });
    });
  }
        
  }



