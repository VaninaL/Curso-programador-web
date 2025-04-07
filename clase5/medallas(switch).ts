import * as rls from "readline-sync"; 
let posicionDeLlegada : number = rls.questionInt ( " ingrese su numero de llegada: ");

switch (posicionDeLlegada) {
    case 1:
        console.log (" Felicitaciones !!!! gana medalla de oro ");
        break;
    case 2 :
        console.log( " Felicitaciones !!!! gana medalla de plata");
        break;
    case 3 :
        console.log(" Felicitaciones !!!! gana medalla de bronce");
        break;
    default :
        console.log(" gana un cerfificado de mencion ");
            
    }
    
    
    
    