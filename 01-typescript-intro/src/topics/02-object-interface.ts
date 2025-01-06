// la idea de esta clase es hablar de unos compuesto de jascript, pero desde typescript

const skills:string[]=['Bash','Counter','Healing'];
/* esto seria la interfaces: nos ayuda a definir los objetos
de como quieren que luscan los objetos literales y otros objetos

*/
interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string; // el ? le dice que el hometown es opcional.
}
const strider:Character={
    name:'Strider',
    hp:100,
    skills:['Bash','Counter'],
};

strider.hometown='Rivendell'

console.table(strider)


export{};