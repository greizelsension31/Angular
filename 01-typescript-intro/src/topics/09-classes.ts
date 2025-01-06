// import { Person } from './09-classes';

// clases basicas: es una mnera de crearse un molde , para crearse instancia de ese molde.la clase  ejemplo vendria siendo un molde de galleta y asi las galletas salgan de la misma manera asi mismo vendria siendo las clases.
// () llama una funcion
// signo? es como decir es opcional

export class Person{
    // public name:string; // inicializar nuestras variables en nuestra clase.pero en clase se conoce como propiedades.
    // private address: string;


    constructor(
        public firtsName:string,
        public lastName:string,
        private address:string='No address'
    ){}
    

}
// export class hero extends Person{
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string,
//     ){
//         super(realName,'New York');//super es una funcion que indica a tyscrip que hay que llamar a un constructor que es el  padre que en esta caso es personal
//     }
//}
export class hero {
    //  public person:Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
        // this.person=new Person(realName);
    }

}
const tony =new Person('tony','Stark','New York');
const ironman =new hero('ironman',45,'tony',tony);
console.log(ironman)