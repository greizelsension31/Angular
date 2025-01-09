import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string= 'iroman';
  public age: number = 45;

  get capitalizedName():string{   // get es un metodo que se ve como una propery
    return this.name.toUpperCase();
  }

  // metodo
  getHeroDescription():string{
    return `${ this.name} - ${ this.age}`;                            // hago concatenacion para devolver valor

  }
  changeHero():void{   // metodo para cambiar el nombre a spiderman.
    this.name='spiderman'

  }
  changeAge():void{  //metodo para cambiar edad
    this.age =26;

  }
}
