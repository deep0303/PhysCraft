// routes/applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Add logging middleware
router.post('/submit', (req, res, next) => {
    console.log('Route hit: /api/applications/submit');
    console.log('Request body:', req.body);
    next();
}, applicationController.submit);

module.exports = router;