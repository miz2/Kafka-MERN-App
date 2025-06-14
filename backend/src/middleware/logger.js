const sendMessage = require('../kafka/producer');

const kafkaLogger = async (req, res, next) => {
  const activity = {
    route: req.originalUrl,
    method: req.method,
    time: new Date().toISOString(),
  };
  await sendMessage(process.env.KAFKA_TOPIC, activity);
  next();
};

module.exports = kafkaLogger;
