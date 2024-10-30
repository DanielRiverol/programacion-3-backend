// dependencias
const express = require("express");
const app = express();

//settings
app.set("PORT", 4000);

// middlewares
app.use(express.json());

// routes publicas
app.get("/", (req, res) => {
  res.status(200);
  res.send("HOLA DESDE UN SERVER DE EXPRESS!!!!!!");
});
app.get("/about", (req, res) => {
  res.status(200);
  res.send("Sobre nosotros");
});
app.get("/contact", (req, res) => {
  res.status(200);
  res.send("Contacto");
});
// rutas de usuarios
const users = []; //database
// Por lo general devuelve json o xml
app.get("/api/users", (req, res) => {
  res.status(200);
  //   res.send("TODOS LOS USUARIOS");
  res.send(users);
});
// app.post("/api/users", (req, res) => {
//   res.status(201);
//   res.send("USUARIO CREADO");
// });
// app.put("/api/users", (req, res) => {
//   res.status(200);
//   res.send("USUARIO ACTUALIZADO");
// });
// app.delete("/api/users", (req, res) => {
//   res.status(204);
//   res.send("USUARIO ELIMINADO");
// });
app.post("/api/users", (req, res) => {
  const { nombre, apellido } = req.body;
  if (!nombre || !apellido) {
    res.status(400).send("Todos los campos son requeridos");
  } else {
    const newUser = {
      id: users.length + 1,
      nombre: nombre,
      apellido: apellido,
    };
    users.push(newUser);
    res.status(201);
    res.send("USUARIO CREADO");
  }
});
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
 const { nombre, apellido } = req.body;
  const userFound = users.find((user) => user.id === +id);

  if (userFound) {
    // console.log("Usuario encontrado");


    res.status(200);
    res.send("USUARIO ACTUALIZADO");
  } else {
    // console.log("Usuario NO encontrado");

    res.status(404).send("USUARIO NO ENCONTRADO");
  }
});

app.delete("/api/users", (req, res) => {
  res.status(204);
  res.send("USUARIO ELIMINADO");
});

//listener
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
