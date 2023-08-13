// greetRoutes.js
const express = require('express');
const router = express.Router();
const greetController = require('../controllers/greetController');

/**
 * @swagger
 * /api/greet/{name}:
 *   get:
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             example:
 *               message: Authenticated
 *               token: 7c612f1e-23a9-43f4-b5ed-0c02eb3a3d5f  # Example generated token
 */
router.get('/greet/:name', greetController.greet);


module.exports = router;
