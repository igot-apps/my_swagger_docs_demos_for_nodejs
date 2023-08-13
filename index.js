const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { v4: uuidv4 } = require('uuid');


const app = express();
const port = 3000;

/**
 * for simplicity sake a static bearer token is used:
 * Bearer 7c612f1e-23a9-43f4-b5ed-0c02eb3a3d5f
 */

// Define Swagger JSDoc configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Complex API with OpenAPI',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./app/routes/*.js'], // Use a glob pattern to include route files
  }

const specs = swaggerJsdoc(options);

// Use Swagger UI to serve API documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Import and use route files
const greetRoutes = require('./app/routes/greetRoutes');
// const helloRoutes = require('./app/routes/helloRoutes');
app.use('/api', greetRoutes);
// app.use('/api', helloRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
