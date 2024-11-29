import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 5000,
  db: {
    dialect: process.env.DIALECT || "mysql",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};
