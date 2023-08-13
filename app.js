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
      title: 'Simple API with OpenAPI',
      version: '1.0.0',
    },
  },
  apis: ['app.js'], // Specify the file(s) that contain the API documentation annotations
};

const specs = swaggerJsdoc(options);

// Use Swagger UI to serve API documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Define API routes
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a simple "Hello, world!" message.
 *     responses:
 *       200:
 *         description: Successful response with the message.
 */
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

/**
 * @swagger
 * /greet/{name}:
 *   get:
 *     summary: Returns a personalized greeting message.
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name to greet.
 *     responses:
 *       200:
 *         description: Successful response with the personalized greeting.
 */
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;

  // Retrieve the name from the query parameter, if available
  const queryName = req.query.name;

  // Use the query parameter if provided, otherwise use the name from the route
  const greetingName = queryName || name;

  res.send(`Hello, ${greetingName}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
