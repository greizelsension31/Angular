/*desestructuracion
que es? 

*/

interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details ;

}
interface Details{
    author:string;
    year:number;
}
const audioPlayer: AudioPlayer ={
    audioVolume:90,
    songDuration:36,
    song: "Mess",
    details:{
        author:'Ed Sheeran',
        year: 2015
     }
}
/// parte de la desestructuracion: se aplica en objeto , importaciones de modulo y arreglos, basicamente consiste en que puedes tomar cierta piezas del objeto llamado audio player piezas que me interesan. 
// imagina que queremos sacar cual es el nombre de la cancion.
 const song='New Song';

                               // details > author
const {song:anotherSong,songDuration:duration, details}=audioPlayer;
const{author}=details;


// details > author: otra forma de hacerlo
// const {author}=audioPlayer.details;

console.log('song:',anotherSong);// esta es otra manera de buscar la cancion , pero no es desetrutracion.pero es mas incomodo de usar
console.log('Duration:',duration);

// console.log('song:',audioPlayer.details);/// porque tienes que repetir linea.

console.log('Author:',author);
export{};