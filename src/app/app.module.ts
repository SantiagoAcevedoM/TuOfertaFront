import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistroComponent } from '../../src/app/components/registro/registro.component';
import { appRoutes } from '../../app.routes';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListarComponent } from './components/listar/listar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuperComponent } from './components/super/super.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NegociosComponent } from './components/negocios/negocios.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { EditarNegocioComponent } from './components/editar-negocio/editar-negocio.component';
import { CrearNegComponent } from './components/crear-neg/crear-neg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';


//AGM
import { AgmCoreModule } from '@agm/core';



import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { CardComponent } from './components/card/card.component';
import { MatDialogModule } from '@angular/material';
import { EditOffertModalComponent } from './components/edit-offert-modal/edit-offert-modal.component';
import { NegociosSuperComponent } from './components/negocios-super/negocios-super.component';
import { OfertasSuperComponent } from './components/ofertas-super/ofertas-super.component';
import { BarraComponent } from './components/barra/barra.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("670384140003304")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1008390643140-h4ke4kmg9is40d4ri87m16s32gclbl84.apps.googleusercontent.com')
        },
      ]
  )
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    ListarComponent,
    UsuarioComponent,
    AdminComponent,
    SuperComponent,
    PerfilComponent,
    NegociosComponent,
    InformacionComponent,
    EditarNegocioComponent,
    EditOffertModalComponent,
    CrearNegComponent,
    OfertasComponent,
    CardComponent,
    NegociosSuperComponent,
    OfertasSuperComponent,
    BarraComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    }),
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyBpUFlwEv2bh4iVkmu7OU7L9GMAfTZrET8",
        authDomain: "oferta-db2d5.firebaseapp.com",
        databaseURL: "https://oferta-db2d5.firebaseio.com",
        projectId: "oferta-db2d5",
        storageBucket: "gs://oferta-db2d5.appspot.com",
        messagingSenderId: "192828139801"
    }),
    AngularFireStorageModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }

  ],
  entryComponents: [EditOffertModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
