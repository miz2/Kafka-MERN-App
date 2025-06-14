const User = require('../models/User');

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
