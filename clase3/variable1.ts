import * as fs from 'readline-sync'

// declarar una variable

let numero1 : number = 3;
let numero2 : number = 5;

//reasignamos valores
numero1 = 7;
numero2 =10;


let resultado : number = numero1 + numero2;

let mensaje : string = "el resultado de la suma es :"+ (resultado)
console.log (mensaje);
//---------------------------------------------------------------------

//tipo de variables
//numerico

let iva : number = 21;
let fraccion : number = 3.14;

// booleano

let estaLogueado : boolean= true;
console.log (iva);
console.log (fraccion);

console.log (estaLogueado);
//texto

let texto : string = "hola como estan 'texto entre comillas' sigue el texto";
console.log (texto);


let base : number = 10;
let altura : number = 5;

let areaDelRectangulo : number = base*altura ;

console.log ("el area del rectangulo es "+ areaDelRectangulo);

//interactuar con el usuario

let mensaje3 : string = fs.question ('escribe un mensaje') ;
console.log ("el mensaje es: " + mensaje3) ;

let base1 : number = fs.questionInt ("ingrese la medida de la base:");
let altura1 : number = fs.questionInt ("ingrese la medida de la altura:");

let areaDelRectangulo1:number=(base1*altura1);

console.log ("el area del rectangulo es :"+ areaDelRectangulo1);
