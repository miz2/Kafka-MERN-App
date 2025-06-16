const Activity = require('../models/Activity');

exports.logActivity = async (req, res) => {
  const activity = await Activity.create({
    userId: req.body.id,
    action: req.body.action,
  });
  res.status(201).json(activity);
};
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
};
