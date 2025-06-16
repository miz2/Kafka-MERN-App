const express = require('express');
const router = express.Router();
const { logActivity ,getActivities} = require('../controllers/activityController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/', authenticate, logActivity);
router.get('/', authenticate, getActivities);

module.exports = router;
