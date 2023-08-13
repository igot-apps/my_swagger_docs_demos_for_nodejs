const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Define Swagger JSDoc configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Complex API with OpenAPI',
      version: '1.0.0',
    },
  },
  apis: ['./app/routes/*.js'], // Use a glob pattern to include route files
};

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
  console.log(`Server is running on http://localhost:${port}`);
});
