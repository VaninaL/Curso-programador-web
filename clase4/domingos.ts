let horas: number = 22;
let dia : string = `domingo`;
let estaLloviendo : boolean = true;

//es domingo a la mañana : firulais va a pasear
//es domingo a la tarde o cualquier dia que llueve : hacer tortas fritas
//cualquier otro dia : ir a trabajar

if (dia === `domingo`) {
    if ( horas >=7 && horas <=12 ){
        console.log ("firulais va a pasear");
}
    else if ( horas >= 13 && horas <= 18 ){ 
        console.log ("hacemos donas")
 } else  {console.log (" estamos durmiendo");

 }
}
 else {
    if (estaLloviendo){
        console.log ("hacemos unas donas");

    }
    console.log ("hay que ir a trabajar");

}
