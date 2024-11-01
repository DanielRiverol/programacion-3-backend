import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { loggerUrl } from "./src/middlewares/middleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//settings
app.set("PORT", 3000);

// middlewares (funciones)
app.use(express.static(path.join(__dirname, "src", "public")));
app.use(express.json());

// mid personalizado
app.use(loggerUrl);
//ruta principal

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "src", "index.html"));
});
app.get("/users", (req, res) => {
  res.status(200).send("TODOS LOS USUARIO");
});
app.post("/users", (req, res) => {
  res.status(200).send("Usuario creado");
});

app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
