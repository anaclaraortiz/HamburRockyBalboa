const Papa = {
    tipoDePapa:"",
    tamano:"", 
    adicionales:"", 
    precio:0,
}
const Bebida = {
    nombre:"",
    tamano:"",
    precio:0,
}
const Postre = {
    nombre:"",
    precio:0,
}
            
// Crear el menú 
const hamburguesaRanchera = new Hamburguesa(
    "Ranchera ESPECIAL",
    "Normal",
    "Doble",
    true,
    "Huevos, Tocino, Cheddar, Doble cebolla caramelizada",
    900
)
const hamburguesaSencilla = new Hamburguesa(
    "Sencilla",
    "Normal",
    "Sencilla",
    true,
    "",
    400
)
let cad = "SELECCIONE UNA OPCIÓN DEL MENU:\n";
cad+= `1. ${hamburguesaRanchera.nombre}\n`;
cad+= "2. "+ hamburguesaSencilla.nombre+"\n"
let opcion = 0;
while(opcion!==1 && opcion!==2)
{
  opcion = parseInt(prompt(cad));
  if(opcion === 1)
  {
      console.log("SU HAMBURGUESA SERÁ\n");
      console.log(hamburguesaRanchera.nombre+"\n");
      console.log(hamburguesaRanchera.precio+"\n");
      console.log(hamburguesaRanchera.adicionales+"\n");
      console.log(hamburguesaRanchera.precio+hamburguesaRanchera.getIva())
     
  }
  else if(opcion === 2)
  {
    console.log("SU HAMBURGUESA SERÁ\n");
    console.log(hamburguesaSencilla.nombre+"\n");
    console.log(hamburguesaSencilla.precio+"\n");
    console.log(hamburguesaSencilla.adicionales+"\n");
    console.log(hamburguesaSencilla.precio+hamburguesaRanchera.getIva())
  }
  else{
      console.log("ESCOJA BIEN!")
  }
}  