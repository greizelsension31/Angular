
// clase de funciones

/* 
si no se pone el tipado de dato typescript va a hacer todo para inferir cual es
pero no se recomienda dejas que tyscript infiera eso, porque si no va acarrear un problema a lo largo de los demas lugares.

*/ 
                    // tipado de datos    
function addnumbers(a:number,b:number): number {
    return a+b;

}
// con function de flecha 

const addnumbersArrow=(a:number, b:number):string=>{
    return `${a+b}`;
}
function multiply(firstNumber:number, secondNumber?:number,base: number=2){

return firstNumber*base;
}
// const result:number=addnumbers(1,2);
// const result2:string=addnumbersArrow(1,2);
// const multiplyresult:number=multiply(5);
// console.log({result,result2,multiplyresult})

// character es personaje.
// amount es cantidad.

// tipando el personaje creando interface

interface character {
    name: string;
    hp:number;
    showHp:()=>void;
}

 const healcharacter =(character:character,amount:number)=>{
    character.hp+=amount;
 }

// definiendo un personaje
const strider:character={
    name:'strider',
    hp:50,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
    }
}
healcharacter(strider,10);
healcharacter(strider,50);
strider.showHp();
export{};