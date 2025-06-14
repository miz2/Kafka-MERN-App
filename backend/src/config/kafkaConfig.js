const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'mern-kafka-app',
  brokers: [process.env.KAFKA_BROKER],
});

module.exports = kafka;
