
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '../../../../node_modules/@angular/router';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:String;
  constructor(public login:LoginService, private navegador:Router, private socialAuthService: AuthService) { 
    
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

  guardar(base:any){
    this.login.postLogin(this.base).subscribe(
      Response=>{
        let persona = Response['persona'];        
        console.log(persona[0].rol);
        if((persona[0].rol)=="Usuario"){
          this.message = "Sesión iniciada usuario";
          this.navigateToUserPanel();

        }else if ((persona[0].rol)==="Administrador"){
          console.log(persona[0].id)
          this.message = "Sesión iniciada admin";
          this.navigateToAdminPanel(persona[0].id);

        }else if((persona[0].rol)=="SuperAdmin"){
          this.message = "Sesión iniciada sa";
          this.navigateToSAPanel();
        }else{
          this.message = "Error en el inicio de sesión";
          window.alert("Error en el inicio de sesión");
        }
        console.log(this.message);
      },error => {
        this.message = "No se pudo iniciar sesion";
        console.log("error");
        window.alert("Error en el inicio de sesión");

      });
  }


  ngOnInit() {
  }
  navigateToUserPanel(){
    this.navegador.navigate(['usuario']);

  }
  navigateToAdminPanel(id:String){
    console.log(id);
    this.navegador.navigate(['admin',id]);
  }
  navigateToSAPanel(){
    this.navegador.navigate(['super']);

  }


}
