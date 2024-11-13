import sequelize from "./db-sequelize.js";
import User from "../models/users.model.js";

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: false });//true reseea la base datos
    console.log("Modelos creados exitosamente");
  } catch (error) {
    console.error("No se puieron sincronizar los modelos", error);
  }
};

export default initializeDatabase;
