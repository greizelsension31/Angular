/*
destructuracion de arreglos: en lugar de usar { }
usaremos este []
*/


//declaramos un arreglo que se llame dragon ball Z y dentro personajes.

// const dbz:String []=['goku','vegeta','Trunk'];

// const trunks =dbz[3] || 'no hay personaje';

// aplicacion de la desustructuracion
const[ , , trunks='Nout Found']:string[]=['goku','vegeta'];

console.log('personsaje 3:',trunks);