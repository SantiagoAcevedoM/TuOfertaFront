import { Component, OnInit } from '@angular/core';
import { ListarService } from '../../services/listar.service';
import { DesactivarUsuarioService } from '../../services/desactivar-usuario.service';
import { EditarUsuarioService } from '../../services/editar-usuario.service';
import { EliminarUsuarioService } from '../../services/eliminar-usuario.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  message:string;
  numadmins:number;
  numusuarios:number;
  public desactivar:DesactivarUsuarioService;
  constructor(public listar:ListarService, private editar:EditarUsuarioService, private eliminar:EliminarUsuarioService) {
    this.traerAdministradores();
    this.traerUsuarios();
    this.numadmins = 0;
    this.numusuarios = 0;
   }

   infousuario = {
    id: '',
    nombre: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    telefono: '',
    genero: '',
    ciudad: '',
    rol:'',
    estado: '',
    token: ''
    };
    
    persona: any[] = [this.infousuario];
    
    base = {
    persona: this.persona
    }; 

    infoeliminar= {
      id: '',
      rol: 'SuperAdmin',
      estado: 'activo',
      token: 'SuperAdmin'
      };
      
      persona2:any[] = [this.infoeliminar];
      base2 = {
      persona: this.persona2
      }; 

  ngOnInit() {
  }
  Personas:any;
  
  traerPersonas(){
    this.listar.getPersonas().subscribe(
      Response=>{
        this.Personas = Response.persona;
        console.log(Response.persona);
      },error => {
        this.message = "No se pudo traer el usuario";
      });
  }

  traerAdministradores(){
    this.listar.getAdministradores().subscribe(
      Response=>{
        console.log(Response.persona.length);
        this.Personas = Response.persona;
        this.numadmins = 0;
        for(let p of Response.persona){
          this.numadmins+=1;
        }
        console.log(Response.persona);
      },error => {
        this.message = "No se pudo traer el usuario";
      });
  }

  seleccionarPersonaEliminar(persona2:any){
    console.log("el id que llego es "+persona2);
    this.infoeliminar.id = persona2;
    // this.infoeliminar.rol = 'SuperAdmin';
    // this.infoeliminar.estado= 'Activo';
    // this.infoeliminar.token= 'SuperAdmin';
    this.eliminarPersona();

  }

  seleccionarPersonaEditar(persona:any){
    this.infousuario.id = persona.id;
    this.infousuario.nombre = persona.nombre;
    this.infousuario.apellidos = persona.apellidos;
    this.infousuario.correo = persona.correo;
    this.infousuario.contrasena = persona.contrasena;
    this.infousuario.telefono = persona.telefono;
    this.infousuario.genero= persona.genero;
    this.infousuario.ciudad = persona.ciudad;
    this.infousuario.rol = persona.rol;
    this.infousuario.estado= persona.estado;
    this.infousuario.token= persona.token;
  
  
    console.log("esta es la oferta a editar");
    console.log(this.infousuario);
  }

  traerUsuarios(){
    this.listar.getUsuarios().subscribe(
      Response=>{
        // this.Personas = Response.persona;
        for(let p of Response.persona){
          this.numusuarios+=1;
        }
        console.log(Response.persona);
      },error => {
        this.message = "No se pudo traer el usuario";
      });
  }
  desactivarPersona(cod:String){
    this.desactivar.DesactivarPersona(cod).subscribe(
      Response=>{
        console.log("Se elimino la persona");
      }, error=>{
        console.log("Error al eliminar");
      }
    );
  }

  editarPersona(){
    console.log("este es i: ");
     console.log("este es el persona a editar");
     console.log(this.base);
     this.editar.editarPersona(this.base).subscribe(data=>{
       console.log("este es el negocio a editar");
       console.log(this.base);
       this.traerAdministradores();
     })
   }

   eliminarPersona(){
     console.log("entro a eliminar persona");
     console.log("base2" + JSON.stringify(this.base2));
    this.eliminar.eliminarPersona(this.base2).subscribe(data=>{
      this.traerAdministradores();
    })
  }
}
