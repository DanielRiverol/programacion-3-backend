// imports
import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import { __dirname, join } from "./src/utils/index.js";
import { usersRoutes, viewsRoutes } from "./src/api/routes/index.js";
import environments from "./src/api/config/environments.js";
import initializeDatabase from "./src/api/database/index.js";
import options from "./src/api/config/swaggerOptions.js";

const PORT = environments.port;
const app = express();
app.set("PORT", PORT);
initializeDatabase();
app.set("view engine", "ejs");
app.set("views", join(__dirname, "src/views"));
app.set("partials", join(__dirname, "src/views/partials"));
// middlewares
app.use(express.static(join(__dirname, "src/public")));
app.use(express.json());
app.use(cors());
// swagger documentation
const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs',swaggerUiExpress.serve,swaggerUiExpress.setup(swaggerSpec))
// routes
app.use("/api/users", usersRoutes);
app.use("/", viewsRoutes);

// listener
app.listen(app.get("PORT"), () =>
  console.log(`Server running on port ${app.get("PORT")}`)
);
