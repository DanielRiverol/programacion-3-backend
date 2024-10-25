// modulos nativos fs
const fs = require("node:fs");
const mensaje =
  "Dentro de cada hombre existe una lucha entre el bien y el mal que no se resuelve. Soy Homero el malo";
// crear archivos
fs.writeFileSync("./mensaje.txt", mensaje, () => {
  try {
    console.log("exito");
  } catch (error) {
    console.log(error);
  }
});
