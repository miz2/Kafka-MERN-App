const express = require('express');
const router = express.Router();
const ruleController = require('../controllers/ruleController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/', authenticate, ruleController.createRule);
router.get('/', authenticate, ruleController.getRules);
router.get('/:id', authenticate, ruleController.getRuleById);
router.put('/:id', authenticate, ruleController.updateRule);
router.delete('/:id', authenticate, ruleController.deleteRule);

module.exports = router;
