const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  trigger: {
    type: String,
    enum: ['SCHEDULE', 'WEBHOOK', 'DB_EVENT'],
    required: true,
  },
  action: {
    type: String,
    enum: ['SEND_EMAIL', 'CALL_API'],
    required: true,
  },
  schedule: { type: String }, 
  payload: { type: Object }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rule', ruleSchema);
