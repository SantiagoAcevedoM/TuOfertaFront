import { Component, OnInit } from '@angular/core';
import { ListarNegociosService } from '../../services/listar-negocios.service';
import { ListarOfertasService } from '../../services/listar-ofertas.service';
import { FiltrarService } from '../../services/filtrar.service';
import { SesionService } from '../../services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 6.26;
  lng: number = -75.56;
  message: string;
  Negocios: any;
  opened: boolean;
  Ofertas: any;
  tipoOfertaSeleccionado: string = '';
  tipoNegocioSeleccionado: string = '';
  // nombre:string;

  nSeleccionados = [false, false, false, false];
  oSeleccionados = [false, false];

  tiposNegocios = ["Restaurante", "Bar", "Almacen", "Otros"];
  tiposOfertas = ["Descuento", "Promocion"];
  tiposDescuento= ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%"];
  tiposPromocion = ["2x1", "3x1", "Hora Feliz", "Tarde Feliz", "Otros"]; 
  tiposNegocioSeleccionados = [];
  tiposOfertasSeleccionados = [];

  misnegocios: any[];
  misofertas: any[];

  constructor(private listarn: ListarNegociosService, private listarofertas: ListarOfertasService, private traerOfertas: FiltrarService,
    private sesion:SesionService, private navegador:Router) {
    this.opened = true;
    this.misnegocios = [];
    this.misofertas = [];
    // this.nombre = this.sesion.persona.nombre;
    if(this.sesion.estaLogeado==false){
      window.alert("Debes iniciar sesión para acceder a esta vista");
      this.navegador.navigate(['/']);

    }

  }

  ngOnInit() {
    //this.traerNegocios();
    this.obtenerOfertasPorTipoNegocioOTipoOferta();
    // window.alert("bienvenido "+ this.sesion.persona.nombre);

  }
  //------
  limpiarFiltros() {
    for (let i = 0; i < this.nSeleccionados.length; i++) {
      this.nSeleccionados[i] = false;
    }
    for (let i = 0; i < this.oSeleccionados.length; i++) {
      this.oSeleccionados[i] = false;
    }
    this.tiposNegocioSeleccionados = [];
    this.tiposOfertasSeleccionados = [];
    this.obtenerOfertasPorTipoNegocioOTipoOferta();
  }

  editarFiltro(filtro, filtros) {
    let indice = filtros.indexOf(filtro);
    if (indice === -1) {
      filtros.push(filtro);
    } else {
      filtros.splice(indice, 1);
    }
  }

  editarFiltrosNegocios(filtro) {
    this.editarFiltro(filtro, this.tiposNegocioSeleccionados);
    this.obtenerOfertasPorTipoNegocioOTipoOferta();
  }

  editarFiltrosOfertas(filtro) {
    this.editarFiltro(filtro, this.tiposOfertasSeleccionados);
    this.obtenerOfertasPorTipoNegocioOTipoOferta();
  }

  //------

  traerNegocios() {
    this.listarn.getAllNegocios().subscribe(
      Response => {
        this.Negocios = Response.negocio;
        // console.log(Response.negocio);
        // console.log(Response);
      }, error => {
        this.message = "No se pudo traer el usuario";
        // console.log(this.message);
      });
  }

  mostrarOferta(codigo) {

    console.log('entro a traer ofertas')
    this.listarofertas.getOfertas(codigo).subscribe(
      Response => {
        this.Ofertas = Response.oferta;
        // console.log(Response.oferta);
        // console.log("Estas son las ofertas");
        // console.log(Response);
      }, error => {
        this.message = 'No se pudo traer las ofertas';
        // console.log(this.message);
      });

  }


  cerrar() {

  }
  IW: any;
  public openIW(data = undefined) {

    if (this.IW) {
      this.IW.close();
      this.opened = false;
    }

    this.IW = data;
  }

  traerTipos() {
    // console.log("entro a traer ofertas");
    this.traerOfertas.traerTipoOferta(this.tipoOfertaSeleccionado).subscribe(
      Response => {
        let Ofertas2;
        Ofertas2 = Response;
        // console.log(Ofertas2);
      }, error => {

      }
    )
  }
  //
  obtenerOfertasPorTipoNegocioOTipoOferta() {
    this.Negocios = [];
    this.Ofertas = [];

    // Datos quemados: Opciones que se van a mostrar al usuario
    let tiposNegocios = this.tiposNegocios;
    let tiposOfertas = this.tiposOfertas;

    // Constantes
    const todosLosTipos = 0;
    const maximoTipoNegocios = tiposNegocios.length;
    const maximoTipoOfertas = tiposOfertas.length;

    // datos obtenidos del front con los checkbox
    let tiposNegocioSeleccionados = this.tiposNegocioSeleccionados;
    let tiposOfertasSeleccionados = this.tiposOfertasSeleccionados;

    // variables necesarias
    let filtrarNegocios;
    let filtrarOfertas;
    let tipoNegocio = "";
    let idNegocio = "";
    let tipoOferta = "";
    let nTipoNegocio = tiposNegocioSeleccionados.length;
    let nTipoOfertas = tiposOfertasSeleccionados.length;

    // Reset de variables globales
    this.misnegocios = [];
    this.misofertas = [];

    // -------------------------------------------------------------------------------- Aplicar filtros
    // Se obtiene el filtro de negocios en caso de no seleccionar ninguna opcion o seleccionar todas
    if (nTipoNegocio == todosLosTipos || nTipoNegocio == maximoTipoNegocios) {
      filtrarNegocios = this.listarn.getAllNegocios();
      tiposNegocioSeleccionados = tiposNegocios;
    }
    tiposNegocioSeleccionados.forEach(                                                  
      tipoN => {                                                                       
        tipoNegocio = tipoN;                                                            
        if (nTipoNegocio != todosLosTipos || nTipoNegocio != maximoTipoNegocios) {
          filtrarNegocios = this.listarn.getAllNegociosByTipo(tipoNegocio);
        }
        filtrarNegocios.subscribe(
          negocios => {
                                              
            if (negocios.negocio.length != 0) {
              negocios.negocio.forEach(
                negocio => {

                  let n = negocio;

                  if (nTipoOfertas == todosLosTipos || nTipoOfertas == maximoTipoOfertas) {
                    filtrarOfertas = this.listarofertas.getAllOfertasActivas();
                    tiposOfertasSeleccionados = tiposOfertas;
                  }
                  tiposOfertasSeleccionados.forEach(                                    
                    tipoO => {                                                         
                      idNegocio = n.idnegocio;                              
                      tipoOferta = tipoO;                                               
 
                      if (nTipoOfertas != todosLosTipos || nTipoOfertas != maximoTipoOfertas) {
                        filtrarOfertas = this.listarofertas.getAllOfertasActivasByNegocioAndTipo(idNegocio, tipoOferta);
                      }
                      filtrarOfertas.subscribe(                                         
                        ofertas => { 
                          console.log("ofertas.oferta");     

                          console.log(ofertas.oferta);     
                            if (ofertas.oferta.length != 0) {                                    
                            let o = ofertas.oferta;   
                            for(let o1 of o){
                              this.misofertas.push(o1);              
                            }

                            let negocioYaFiltrado = false;
                            for (let i = 0; i < this.misnegocios.length; i++) {                 
                          
                              if (this.misnegocios[i] == negocio) {
                                negocioYaFiltrado = true;
                                break;
                              }
                            }
                            if (!negocioYaFiltrado) {
                              this.misnegocios.push(n);                          
                            }

                            this.Negocios = this.misnegocios;
                            this.Ofertas = this.misofertas;
                          }
                        }
                      );
                    }
                  );
                }
              );
            }
          }
        );
      }
    );
  }

}

