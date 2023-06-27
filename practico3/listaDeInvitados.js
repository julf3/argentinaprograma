//Lista de Invitados

let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

for (let i = 0; i < personas.length; i++) 
{
    if (personas[i] === "Jose" || personas[i] === "Sofia") 
{rechazados.push(personas[i]);} 
else {admitidos.push(personas[i]);}
}

console.log("La lista de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) 
{console.log(admitidos[i]);
}

console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}


