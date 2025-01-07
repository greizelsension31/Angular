// import { CounterComponent } from './counter.component';
import { Component, OnInit } from '@angular/core';

// template se puede trabajar como si fuera el html
@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter:{{counter}}</h3>
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>
  `
}) // nuestra funcionacilidad del counter encapsulada
export class CounterComponent {
  public counter: number=10;

  //metodo
  increaseBy(value:number):void {
 this.counter += value;
  }
  resetCounter():void{
   this.counter=10;
  }



   }



