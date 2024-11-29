import { Sequelize } from "sequelize";
import environments from "../config/environments.js";
const { db } = environments;
const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
  pool: {
    max: 15,
    acquire: 30000,
    idle: 10000,
  },
  logging: true,
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export default sequelize;
