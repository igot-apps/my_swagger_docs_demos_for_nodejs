// greetRoutes.js
const express = require('express');
const router = express.Router();
const greetController = require('../controllers/greetController');

/**
 * @swagger
 * /api/greet/{name}:
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
router.get('/greet/:name', greetController.greet);

module.exports = router;
