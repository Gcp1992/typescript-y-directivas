import { Component } from '@angular/core';

enum DiasSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {

  //Esta variable puede adoptar dos tipos de valor
  miValor:string|number;

  //Array
  arrayNumeros: number[]=[7,9,1,2,4];

  //Enumeracion:
  diaHoy: DiasSemana = DiasSemana.Sabado;
  respuesta:string="";

  constructor() {
    this.imprimirArray();
    this.miValor= 'Hola, mundo!';
    console.log(this.procesarValor(this.miValor));

    //Aquí miValor adopta un tipo number
    this.miValor = 42;
    console.log(this.procesarValor(this.miValor));
  }

  imprimirArray(): void {
    //1º funcion: método push para añadir elementos a un Array:
    this.arrayNumeros.push(10);
    console.log("Función push: " + this.arrayNumeros);

    //2ºmétodo unshift para agregar elementos al inicio del Array:
    this.arrayNumeros.unshift(0);
    console.log("Función unshift: " + this.arrayNumeros);

    /*3ºmétodo splice para gregar o eliminar elementos del array
    en una posición determinada*/
    this.arrayNumeros.splice(1,0,6);
    console.log("Splice: " + this.arrayNumeros)

    /*2ª función: método shift para eliminar el primer elemento del array
    y que lo muestre*/
    let primerElemento=this.arrayNumeros.shift();
    console.log("Primer elemento: " + primerElemento);
    console.log("Shift: " + this.arrayNumeros);

    //4º función: Ordenación ascendente:
    this.arrayNumeros.sort((a, b) => a - b);
    console.log("Sort: " + this.arrayNumeros);

    //5º método slice para obtener una porción de un array
    let subArray=this.arrayNumeros.slice(2);
    console.log("Slice: " + subArray);
  }

  //UNIÓN DE TIPOS

  procesarValor(valor: string | number):string | number {
    if (typeof valor === 'string') {
      return valor.toUpperCase();
      //miValor es tipo number así que aquí se hace la ejecución
    } else if (typeof valor === 'number') {
      return valor * 2;
    } else {
      console.log("Tipo de valor no soportado");
      return valor;
  }

  }

  procesarDia(){
    if (this.diaHoy === DiasSemana.Sabado || this.diaHoy === DiasSemana.Domingo) {
      console.log('Es fin de semana!');
      this.respuesta="¡Es finde semana!";
    } else {
      console.log('No es fin de semana.');
      this.respuesta="No es finde semana";
    }
}
}
