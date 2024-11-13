import sequelize from "../database/db-sequelize.js";
import User from "../models/users.model.js";
import { faker } from "@faker-js/faker";

const createRandomUnsers = (count = 10) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName.toLocaleLowerCase(),
      lastName: lastName.toLocaleLowerCase(),
    });

    users.push({
      firstName,
      lastName,
      email,
      status: faker.datatype.boolean(),
    });
  }

  return users;
};

const seedUsers = async () => {
  try {
    await sequelize.sync({ force: true }); //true resetea la base datos
    const usersData = createRandomUnsers(45);

    await User.bulkCreate(usersData); //ingreso masivo
  } catch (error) {
    console.error("No se pudieron sincronizar los modelos", error);
  } finally {
    await sequelize.close();
  }
};

seedUsers();
