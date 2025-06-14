const Activity = require('../models/Activity');

exports.logActivity = async (req, res) => {
  const activity = await Activity.create({
    userId: req.body.userId,
    action: req.body.action,
  });
  res.status(201).json(activity);
};
