const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');

app.use('/api/users', userRoutes);
app.use('/api/activity', activityRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch(err => console.log(err));
