//Ejercicio 2

const readlineSync = require('readline-sync');


const meses = {
    1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre'
  };

  let numeroMes = parseInt(readlineSync.question("Ingresa un numero del 1 al 12: "));

  if (numeroMes >= 1 && numeroMes <= 12) {
    let cantidadDias;

    if (numeroMes === 2) {
        cantidadDias = 28;
      } else if (numeroMes === 4 || numeroMes === 6 || numeroMes === 9 || numeroMes === 11) {
        cantidadDias = 30;
      } else {
        cantidadDias = 31;
      }
      
      console.log(`La cantidad de dias del mes de ${meses[numeroMes]} es ${cantidadDias}`);
    } else {
      console.log("Incorrecto, el numero a elegir es del 1 al 12.");
    }
