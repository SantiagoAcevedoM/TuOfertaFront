import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  message:String;
  public form: FormGroup;

  constructor(private fb: FormBuilder, public registro:RegistroService, private router: Router) { 
    //this.CreateForm();
    //console.log(this.base2['datos[0]'].persona['id']);
  }

    usuario: Object = {
      nombre: '',
      apellidos: '',
      correo: '',
      contrasena: '',
      telefono: '',
      genero: '',
      ciudad: '',
      rol:'',
      estado: 'activo',
      token: 'usuario'
      };
      
      persona: any[] = [this.usuario];
      
      base: Object = {
      persona: this.persona
      }; 

      registrar(){
        
        console.log("entro al post");
        this.registro.postRegistro(this.base).subscribe(
          Response=>{
            console.log(Response);
            window.alert("Usuario registrado con exito");
            this.router.navigate(['']);
          },error =>{
            console.log(error);
          }
        )
        }
  
/*
  CreateForm(){
    this.form=this.fb.group({
    id:[],
    nombre:['',Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
    ])],
    apellidos:['',Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
      ])], 
    correo:['',Validators.compose([
    Validators.required,
    Validators.email]
    )],
    contrasena: ['', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(18)
    ])],
    telefono:[],
    genero:[],
    ciudad:[],
    rol:[]
    })
    }
    */

    ngOnInit() {

      console.log("usuario");

      console.log(this.usuario);
      console.log("persona");

      console.log(this.persona);
      console.log("base");

      console.log(this.base);



    }
}
