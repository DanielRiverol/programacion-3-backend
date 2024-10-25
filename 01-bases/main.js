console.log("iniciando con Node");
const usuario = { nombre: "Homero", apellido: "Simpson" };

console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.apellido);
for (const clave in usuario) {
  console.log(clave, usuario[clave]);
}
