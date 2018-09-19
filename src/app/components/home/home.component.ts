import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '../../../../node_modules/@angular/router';
import { SesionService } from '../../services/sesion.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:String;
  personaLogin = {
    id:'',
    nombre: '',
    apellidos: '',
    rol:'',
    correo: '',
    telefono: '',
    genero: '',
    ciudad: '',
    estado: '',
  }

  constructor(public login:LoginService, private navegador:Router, private socialAuthService: AuthService, private sesion:SesionService) { 

  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        this.iniciarSesionRedes(userData);
            //userData.email;
            // this.navigateToUserPanel();

      }
    );
  }
//Router.NavigateTo
  usuario: Object = {
    correo: '',
    contrasena: ''
    };
    
    persona: any[] = [this.usuario];
    
    base: Object = {
    persona: this.persona
    }; 

  iniciarSesionRedes(personaRedes){
    this.personaLogin.id = personaRedes.id;
    this.personaLogin.nombre = personaRedes.name;
    this.personaLogin.correo = personaRedes.email;
    this.personaLogin.apellidos = '';
    this.personaLogin.rol = 'Usuario';
    this.personaLogin.telefono = '';
    this.personaLogin.genero = '';
    this.personaLogin.ciudad = '';
    this.personaLogin.estado = 'Activo';
    this.sesion.iniciarSesion(this.personaLogin);
  }
  iniciarSesion(base:any){
    this.login.postLogin(this.base).subscribe(
      Response=>{
        let persona = Response['persona'];        

        //
        this.personaLogin.id = persona[0].id;
        this.personaLogin.nombre = persona[0].nombre;
        this.personaLogin.apellidos = persona[0].apellidos;
        this.personaLogin.rol = persona[0].rol;
        this.personaLogin.correo = persona[0].correo;
        this.personaLogin.telefono = persona[0].telefono;
        this.personaLogin.genero = persona[0].genero;
        this.personaLogin.ciudad = persona[0].ciudad;
        this.personaLogin.estado = persona[0].estado;
        this.sesion.iniciarSesion(this.personaLogin);

        //
        // console.log(persona[0].rol);
        // if((persona[0].rol)=="Usuario"){
        //   this.message = "Sesión iniciada usuario";
        //   this.navigateToUserPanel();

        // }else if ((persona[0].rol)=="Administrador"){
        //   this.message = "Sesión iniciada administrador";
        //   this.navigateToAdminPanel(persona[0].id);

        // }else if((persona[0].rol)=="SuperAdmin"){
        //   this.message = "Sesión iniciada sa";
        //   this.navigateToSAPanel();
        // }else{
        //   this.message = "Error en el inicio de sesión";
        //   alert("No se pudo iniciar sesión");
        //   window.alert("Error en el inicio de sesión");


        // }
        // console.log(this.message);
      },error => {
        this.message = "No se pudo iniciar sesion";
        console.log("error");
        window.alert("Error en el inicio de sesión");


      });
  }


  ngOnInit() {
  }
  // navigateToUserPanel(){
  //   this.navegador.navigate(['/usuario']);

  // }
  // navigateToAdminPanel(id:String){
  //   this.navegador.navigate(['/admin/'+id]);
  // }
  // navigateToSAPanel(){
  //   this.navegador.navigate(['/super']);

  // }

}
