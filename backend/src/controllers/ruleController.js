const Rule = require('../models/Rule');

exports.createRule = async (req, res) => {
    try {
      const userId = req.user?.userId;
  
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized: userId missing' });
      }
  
      const rule = await Rule.create({
        ...req.body,
        userId
      });
  
      res.status(201).json({ message: 'Rule created successfully', rule });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create rule', error: error.message });
    }
  };

exports.getRules = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const rules = await Rule.find({ userId });
    res.status(200).json(rules);
  } catch (err) {
    console.error('Error fetching rules:', err);
    res.status(500).json({ message: 'Failed to fetch rules' });
  }
};

exports.getRuleById = async (req, res) => {
    try {
      const rule = await Rule.findOne({ _id: req.params.id, userId: req.user.userId });
      if (!rule) return res.status(404).json({ message: 'Rule not found' });
      res.status(200).json(rule);
    } catch (err) {
      console.error('Error fetching rule:', err);
      res.status(500).json({ message: 'Failed to fetch rule' });
    }
  };

  exports.updateRule = async (req, res) => {
    try {
      const updated = await Rule.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.userId },
        req.body,
        { new: true, runValidators: true }
      );
      if (!updated) return res.status(404).json({ message: 'Rule not found or unauthorized' });
      res.status(200).json(updated);
    } catch (err) {
      console.error('Error updating rule:', err);
      res.status(500).json({ message: 'Failed to update rule' });
    }
  };
  exports.deleteRule = async (req, res) => {
    try {
      const deleted = await Rule.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
      if (!deleted) return res.status(404).json({ message: 'Rule not found or unauthorized' });
      res.status(200).json({ message: 'Rule deleted successfully' });
    } catch (err) {
      console.error('Error deleting rule:', err);
      res.status(500).json({ message: 'Failed to delete rule' });
    }
  };
    