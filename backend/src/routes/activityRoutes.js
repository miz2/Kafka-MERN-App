const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger');
const { logActivity } = require('../controllers/activityController');

router.post('/', logger, logActivity);

module.exports = router;
