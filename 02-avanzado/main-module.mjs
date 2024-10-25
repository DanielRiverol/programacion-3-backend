console.log("Sitaxis ES6 de modulos");
// import { add, substract } from "./math-module.mjs";
// *
import * as math from "./math-module.mjs";
const {add,substract}= math
const suma = add(45, 2);
console.log(suma);
const resta = substract(5, 2);
console.log(resta);
