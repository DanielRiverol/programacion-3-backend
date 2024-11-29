import { __dirname, join } from "../../utils/index.js";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API de usuarios",
      description: "CRUD de usuarios | Programación 3",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
      {
        url: "https://api-sequelize-1.onrender.com",
        description: "Servidor de produccion",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Id de usuario",
            },
            firstName: {
              type: "string",
              description: "Nombre de usuario",
            },
            lastName: {
              type: "string",
              description: "Apellido de usuario",
            },
            email: {
              type: "string",
              description: "Email de usuario",
            },
            status: {
              type: "boolean",
              description: "Estado de usuario - activo/inactivo",
            },
          },
          example: {
            id: 1,
            firstName: "Xabi",
            lastName: "Gallardo",
            email: "elxabi@mail.com",
            status: true,
          },
        },
      },
    },
  },
  apis: [join(__dirname, "src/api/routes/*.js")],
};

export default options;
