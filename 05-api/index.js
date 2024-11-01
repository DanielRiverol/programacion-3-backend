import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { loggerUrl } from "./src/middlewares/middleware.js";
import { title } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//settings
app.set("PORT", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// middlewares (funciones)
app.use(express.static(path.join(__dirname, "src", "public")));
app.use(express.json());
// mid personalizado
app.use(loggerUrl);
//ruta principal

app.get("/", (req, res) => {
  //   res.status(200).sendFile(path.join(__dirname, "src", "index.html"));
  res.status(200).render("index", {
    title: "QUE MIRAS BOBO",
    titulo_pricipal: "HOLA SAN LUIS",
  });
});
app.get("/about", (req, res) => {
  //   res.status(200).sendFile(path.join(__dirname, "src", "index.html"));
  res.status(200).render("about", {
    title: "ABOUT",
    titulo_pricipal: "PAGINA DE ABOUT",
  });
});
const users = ["Leon", "Magali", "Gonzalo", "Julian", "Emanuel"];
app.get("/users", (req, res) => {
  res.status(200).render("users", {
    title: "Lista de usuarios",
    titulo_pricipal: "Lista de usuarios",
    users,
  });
});
app.post("/users", (req, res) => {
  const { nombre } = req.body;
  users.push(nombre);
  res.status(200).send("Usuario creado");
});

app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
