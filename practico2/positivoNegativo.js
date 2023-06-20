//Ejercicio 2)

const readlineSync = require('readline-sync');
let numero = parseFloat(readlineSync.question("Ingresa un número: "));

if (numero > 0) {
    console.log("El número es Positivo");}
    else if (numero === 0) 
    {console.log("El número es cero");}
    else {console.log("El número es Negativo");}

    