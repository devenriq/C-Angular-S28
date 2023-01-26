import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Primero creamos una variable datos
  operadores;

  valor1 = 0;
  valor2 = 0;

  //aqui el resultado
  resultado:any;

  //luego creamos una variable para guardar la opcion selecionada
  //contra esta variable vamos con el ngModel
  selected: string = '0'; // Iniciamos

  //cremoa la variable donde lo guardare
  miOpcion: string = '';

  constructor() {
    this.operadores = ['+', '-', '*', '/'];
  }

  capturar() {
    this.miOpcion = this.selected;
  }

  // calcular() {
  //   return (this.resultado = eval(Number(this.valor1) + this.miOpcion + Number(this.valor2)));
  // }

  sumar(num1:number,num2:number):number{
    return this.resultado=num1+num2
  }
  restar(num1:number,num2:number):number{
    return this.resultado=num1-num2
  }
  multiplicar(num1:number,num2:number):number{
    return this.resultado=num1*num2
  }
  dividir(num1:number,num2:number):number{
    return this.resultado=num1/num2
  }
  calcular(num1:number,num2:number):number{
    return this.resultado=num1+num2
  }
}
