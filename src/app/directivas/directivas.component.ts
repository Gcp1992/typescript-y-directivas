//Necesitamos importar ViewContainerRef para mostrar el ng-template
//Así podemos hacer referencia al container para crear, mover y eliminar elementos del DOM
import { Component, ViewContainerRef } from '@angular/core';

interface Pala {
  titulo: string;
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  titulo="Registro de palas"
  mensaje:string="";
  registrado:boolean=false;
  marca:string="";
  modelo:string="";
  //entradas string que almacena array de objetos
  registros: Pala[];

  //En el constructor llenaremos el Array de entradas:
  constructor(){
    this.registros=[
      {titulo: "Siux Carbon"},
      {titulo: "Babolat Wolf"},
      {titulo: "Head Alpha"},
      {titulo: "Bullpadel Vertex"},
      {titulo: "Siux Electra"}
    ]
  }

  registrarPala(){
    this.registrado=true;
    this.mensaje="Pala introducida correctamente";
  }

  opcionSeleccionada: string = '';

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  array:any=[
    {
      nombre: "A"
    },

    {
      nombre: "B"
    },

    {
      nombre: "C"
    },

    {
      nombre: "D"
    }

  ]
}
