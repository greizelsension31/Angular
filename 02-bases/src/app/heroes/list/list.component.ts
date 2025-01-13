import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] =['Spiderman','Ironman','Hulk','She Hulk','Thor']; // creamos una propiedad de nuestro componente y simplemente usar la directiva en el html list. para que cree la lista.
  public deletedHero?:string;

  removeLastHero():void{
   this.deletedHero =  this.heroNames.pop();

  }


}
