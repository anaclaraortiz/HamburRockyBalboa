function hacerRegistro ()
{

const nombre = document.getElementById ("nombre").value;
console.log (nombre )

const apellido = document.getElementById ("apellido");
const cedula = document.getElementById ("cedula");
const password = document.getElementById ("password");

const miUsuario = new Usuario ("", "", "", "");

miUsuario.registrar(nombre, apellido, cedula, password);

alert ("su registro ha sido exitoso");

window.location.href="index.html"
}