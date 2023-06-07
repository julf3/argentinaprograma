//Parte 2  4)

var cita = "Tres tristes tigres comen trigo en un trigal";
var substring = "tigres comen trigo";

var tamañoDeCita = cita.length;


console.log("El tamaño de la cita es: " + tamañoDeCita);


var indice = cita.indexOf(substring);

console.log("El indice del substring es: " + indice);


var citaRevisada = cita.slice(0, indice) + substring + cita.slice(indice + substring.length);

console.log(citaRevisada);

//Rta: 