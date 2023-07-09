//Ejercicio 1

const readline = require('readline');

const opciones = ["piedra", "papel", "tijeras"];

function obtenerJugadaComputadora() {
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

async function obtenerJugadaUsuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Ingresa tu jugada (piedra, papel o tijeras): ', (jugadaUsuario) => {
      rl.close();
      resolve(jugadaUsuario);
    });
  });
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaUsuario === jugadaComputadora) {
    return "Empate";
  } else if (
    (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel")
  ) {
    return "Gana el usuario";
  } else {
    return "Gana la computadora";
  }
}

async function jugarPiedraPapelTijeras() {
  const jugadaComputadora = obtenerJugadaComputadora();
  const jugadaUsuario = await obtenerJugadaUsuario();
  const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  console.log("La computadora eligió: " + jugadaComputadora);
  console.log("El usuario eligió: " + jugadaUsuario);
  console.log("El resultado fue: " + resultado);
}

jugarPiedraPapelTijeras();


