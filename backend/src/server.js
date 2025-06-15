const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');

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

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));
