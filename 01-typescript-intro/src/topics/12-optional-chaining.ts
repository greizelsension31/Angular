import { passenger, Passenger } from './12-optional-chaining';

// Encadenamiento Opcional


export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1:Passenger = {
    name:'Fernando',
}
const passenger2:Passenger = {
    name:'Melissa',
    children:['Nathalia','Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger) => {
    
    const howManyChildren=passenger.children?.length|| 0;
    // const howManyChildren=passenger.children!.length;

    console.log(passenger.name,howManyChildren);
    return howManyChildren;
}
returnChildrenNumber(passenger2);