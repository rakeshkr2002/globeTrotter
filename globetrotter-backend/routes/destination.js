const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// This route should match the endpoint in your axios call
router.get('/random-destination', destinationController.getRandomDestination);

module.exports = router;
