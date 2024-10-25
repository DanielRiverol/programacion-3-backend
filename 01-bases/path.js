const path = require('node:path') 

// console.log(path)
// console.log("Ruta completa al archivo: ", __filename);
// console.log("Ruta donde se encuentra el archivo: ", __dirname);

// console.log("Nombre de archivo: ", path.basename(__filename));
// console.log("Nombre de la carpeta: ", path.basename(__dirname));

// console.log("Extension de archivo: ", path.extname(__filename));
// console.log("La carpeta no tiene extension: ", path.extname(__dirname));

// join
console.log(path.join("carpeta1","carpeta2", "index.html"));
console.log(path.join("///carpeta1","/carpeta2", "//index.html"));
console.log(path.join(__dirname, "mensaje.txt"));
