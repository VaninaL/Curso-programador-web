import * as rs from "readline-sync";
let usuario : string = rs.question ("ingrese su nombre de usuario:");
const usuarioCorrecto : string = ("juan") ;
let contraseña : string = rs.question ("ingrese la contraseña:");
let contraseñaCorrecta : string = ("clavejuan")
console.log ("usuario:" + usuario);
console.log ("contraseña:" + contraseña);
  
if ( usuario == usuarioCorrecto && contraseña == contraseñaCorrecta ) {
console.log (" inicia logueo ");
} else {
    console.log (" datos incorrectos, vuelva a ingresar datos ");
}

