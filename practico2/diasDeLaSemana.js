const readlineSync = require('readline-sync');
let numeroDia = parseInt(readlineSync.question("Ingresa un numero del 1 al 7: "));

let mensaje;

switch (numeroDia) {
  case 1:
    mensaje = "Hoy es lunes";
    break;
  case 2:
    mensaje = "Hoy es martes";
    break;
  case 3:
    mensaje = "Hoy es miercoles";
    break;
  case 4:
    mensaje = "Hoy es jueves";
    break;
  case 5:
    mensaje = "Hoy es viernes";
    break;
  case 6:
    mensaje = "Hoy es sabado";
    break;
  case 7:
    mensaje = "Hoy es domingo";
    break;
  default:
    mensaje = "Numero invalido";
    break;
}

console.log(mensaje);