// imports
import express from "express";
import { __dirname, join } from "./src/utils/index.js";
import { usersRoutes, viewsRoutes } from "./src/api/routes/index.js";

// settings
const PORT = 3000;
const app = express();
app.set("PORT", PORT);
app.set("view engine", "ejs");
app.set("views", join(__dirname, "src/views"));
app.set("partials", join(__dirname, "src/views/partials"));
// middlewares
app.use(express.static(join(__dirname, "src/public")));

// routes
app.use("/api/users", usersRoutes);
app.use("/", viewsRoutes);
// app.get("/", (req, res) => {
//   res.send("HOLA DESDE EXPRESS");
// });
// listener
app.listen(app.get("PORT"), () =>
  console.log(`Server running on port ${app.get("PORT")}`)
);
