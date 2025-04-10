
let palabra:string = "zanAhoriA";
let condicion1:RegExp;

condicion1 = /a/gi;
//funcion depende lo que yo reciba devuelvo lo mismo pero en mayusculas
//              buscar             reemplaza "toma te doy una a"
//.replace (   condicion1   ,        funcion   ==>  A   )
//
let palabraModificada:string = palabra.replace(   condicion1    ,   "1"       );

console.log(palabraModificada);

