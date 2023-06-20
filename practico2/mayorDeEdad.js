//Ejercicio 1 a)


const readlineSync = require('readline-sync');
let edad = readlineSync.question("Ingresa tu edad: ");

if (parseInt(edad) >= 18) 
{console.log("Eres mayor de edad");} 
    else 
    {console.log("Eres menor de edad");}


    