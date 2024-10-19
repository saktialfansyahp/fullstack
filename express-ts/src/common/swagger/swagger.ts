import swaggerJSDoc from "swagger-jsdoc";
import { Express } from "express";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "API Documentation for Express TypeScript project",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["../../route*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export const setupSwagger = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
