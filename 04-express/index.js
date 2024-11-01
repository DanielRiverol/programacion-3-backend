// dependencias
const express = require("express");
const app = express();

//settings
app.set("PORT", 4000);

// middlewares
app.use(express.json());

// rutas publicas
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
const users = []; //database cambiar a let o usar slice
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
      nombre,
      apellido,
    };
    users.push(newUser);
    res.status(201);
    res.send("USUARIO CREADO");
  }
});
app.put("/api/users/:id", (req, res) => {
  // const { id } = req.params;
  const id = req.params.id;
  const { nombre, apellido } = req.body;
  const userFound = users.find((user) => user.id === +id);
  if (userFound) {
    userFound.nombre = nombre || userFound.nombre;
    userFound.apellido = apellido || userFound.apellido;
    res.status(200).send("USUARIO ACTUALIZADO");
  } else {
    res.status(400).send("ALGO SALIO MAL");
  }
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === +id);
  console.log(userIndex);

  if (userIndex != -1) {
    users.splice(userIndex, 1);
    res.status(204).send("USUARIO ELIMINADO");
  }else{
    
    res.status(404).send("USUARIO NO Encontrado");
  }
});

//listener
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
