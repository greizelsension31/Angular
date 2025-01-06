import { taxCalculation } from './07-function-destructuring';

// Import -export en typeScript.
// la idea de las import y export: una funcionalidad encapsuladada.
// transformar esos archivos en modulos.

import{ } from './07-function-destructuring';

const shoppingCart:Product[]=[
    {
        description:'Nokia',
        price:100
    },
    {
        description:'iPap',
        price:150
    }
 ];
// tax 0.15
const[total,tax]=taxCalculation({
    productos:shoppingCart,
    tax:0.15
});

console.log('Total',total);
console.log('Tax',tax);

