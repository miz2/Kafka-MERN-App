const mongoose = require('mongoose');
const ActivitySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  action: String,
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Activity', ActivitySchema);
