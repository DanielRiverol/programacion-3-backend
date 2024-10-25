const math = require('./math.js') 

let mensaje = "Hola desde NODEJS. Estoy contento de empezar con backend";
// node --watch nombre de archivo. Cerrar CRTL + c
console.log(mensaje);
const {add, substract}= math

// const suma = math.add(3,6)
// console.log(suma);
// const resta = math.substract(3,6)
// console.log(resta);
const suma = add(3,6)
console.log(suma);
const resta = substract(3,6)
console.log(resta);
// console.log(module.exports);
