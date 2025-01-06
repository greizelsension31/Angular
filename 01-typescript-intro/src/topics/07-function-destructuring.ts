/*
Destructuracion de funciones
*/


// Crearemos un interfaz para manejar unos productos voy a crearme un par de productos y una funcion que me va servir para calcular el impuesto de los productos.
export interface Producto{
    description:string;
    price: number;

}
const phone : Producto={
    description: "Nokia A1",
    price: 150.0,
}
const Table: Producto={
    description: 'iPap Air',
    price: 250.0
}
// taxcalculationoptions es un objeto  que va tener tax y arregl de produscto.
export interface TaxCalculationOptions{
    tax:number;
    productos:Producto[];

}
// patron comun
//opctiones para desestructuras. 
// function taxCalculation(options:TaxCalculationOptions):[number,number]{
// function taxCalculation({tax,productos}:TaxCalculationOptions):[number,number]{
export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    const {tax,productos}=options;
    let total=0;

             // esta parte se aplico desestructuracion
   productos.forEach(({price})=>{
        total+=price;
    });
    return[total, total *tax];
}
    // const shopingCart =[phone, Table];
    // const tax=0.5;

    // esta parte se aplico desestructuracion
// const [total,tax]=taxCalculation({
//         productos:shopingCart,
//         tax:0.5,
//     });

   

// console.log('total',total);
// console.log('tax',tax);
// console.log(' el producto es:',productos)
// export{};