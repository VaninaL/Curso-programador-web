// si llueve y la hora es menor a 19 vamos por asfalto. En cualquier otro caso nos detenemos.


const hora : number = 20
;
let llueve : boolean = false;
let clima : string = "";

if (llueve) {
clima = (" Esta lloviendo");
} else (" no esta lloviendo");

console.log (`inicia el viaje 
--------
------
-----
----
---
--
-
recorcholis !!!! llegamos a una bifurcacion `);

console.log (`
son las ${hora}  horas y ${clima}
    `);

if (llueve){
    if (hora > 19 ){ 
        console.log (" esperamos a que deje de llover");
     } else {console.log (" Tomamos la ruta asfaltada, corta, aburrida pero segura y rapida") ; 
 }
}else
if (hora > 19 ){
    console.log ("tomamos la ruta asfaltada, corta, aburrida pero segura y rapida ");
}else {console.log (" tomamos la ruta de ripio, mas larga pero con hermosas vistas ");
}

 
console.log (`
    Fin del viaje`);