const express = require('express');
const router = express.Router();
const { logActivity } = require('../controllers/activityController');
const { authenticate } = require('../middleware/authMiddleware');

// Protect all activity routes
router.post('/', authenticate, logActivity);

module.exports = router;
