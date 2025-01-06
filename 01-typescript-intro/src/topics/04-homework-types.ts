/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    name: string;
    age:number;
    address: Address;
    showAddress:()=>string;
}

interface Address{
    street:string;
    country:string;
    city:string;  
}

const superHeroe:SuperHeroe = {
    name: 'Spiderman',
    age: 30,
    address: { //como aqui dentro del interface hay un objeto nuevo definiendo otras variables. se recomienda que ese objeto tambien tenga su interfaz.
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};