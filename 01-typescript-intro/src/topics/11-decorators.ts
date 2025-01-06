// import { whatsMyType } from './10-generics';

//decoradores:sirven para crear propios framewokr, pero dificilmemte se ahra eso mas se usara los decoradores que existen.
//angular nos permite la misma sitaxis y el decorador es el que cambia la dinamica de todo que por ejemplo sea @ service y cambia la clase a ser un servicio.

// creando el decorador , es una function basicamente
function classDecorator<T extends{new(...args: any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty='New Property';
        hello ='override';

    }

}
@classDecorator

export class SuperClass{
    public myProperty:string='Abc123';
    print(){ //metodo 
        console.log('Hola Mundo')
    }
}
console.log(SuperClass);
const MyClass =new SuperClass();
console.log(MyClass);