const cron = require('node-cron');
const Rule = require('../models/Rule'); 
const sendEmail = require('../services/emailService'); 

const scheduleRules = async () => {
  const rules = await Rule.find({ trigger: 'SCHEDULE' });

  rules.forEach((rule) => {
    if (!cron.validate(rule.schedule)) {
      console.warn(`Invalid cron schedule: ${rule.schedule}`);
      return;
    }

    cron.schedule(rule.schedule, async () => {
      console.log(`Executing rule: ${rule.name}`);

      if (rule.action === 'SEND_EMAIL') {
        const { email, subject, body } = rule.payload;
        await sendEmail(email, subject, body);
      }
    });
  });
};

module.exports = scheduleRules;
