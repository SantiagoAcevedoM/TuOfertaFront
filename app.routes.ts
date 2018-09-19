import { Routes } from '@angular/router';
import { RegistroComponent } from './src/app/components/registro/registro.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ListarComponent } from 'src/app/components/listar/listar.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';
import { SuperComponent } from 'src/app/components/super/super.component';
import { EditarNegocioComponent } from 'src/app/components/editar-negocio/editar-negocio.component';
import { CardComponent } from 'src/app/components/card/card.component';


export const appRoutes: Routes = [
    { path: 'registrar', component: RegistroComponent },
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    // { path: 'listar', component: ListarComponent},
    { path: 'usuario', component: UsuarioComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'super', component: SuperComponent},
    { path: 'editarnegocio/:id', component: EditarNegocioComponent},
    { path: 'ofertas/:id', component: CardComponent},
    { path: '**', component: HomeComponent, pathMatch: 'full' }
  ];