const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/submit-answer', userController.submitAnswer);

module.exports = router;