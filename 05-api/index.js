import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//settings
app.set("PORT", 3000);

// middlewares (funciones)
app.use(express.static(path.join(__dirname, "src", "public")));
//ruta principal

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
