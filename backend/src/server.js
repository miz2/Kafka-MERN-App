const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const scheduledRules = require('./scheduler/ruleScheduler');
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const ruleRoutes = require('./routes/ruleRoutes');
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/activity', activityRoutes);
app.use('/api/rules', ruleRoutes); 

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    // to load the cron jobs
    // scheduledRules();
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));
