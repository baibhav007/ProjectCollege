const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');
const hostelRoutes = require('./routes/hostel');

const app = express();

// Middleware
app.use(bodyParser.json());

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 60000, // 1 minute timeout
        socketTimeoutMS: 60000,  // 1 minute socket timeout
        serverSelectionTimeoutMS: 60000, // 1 minute server selection timeout
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.log('MongoDB connection error:', err);
    }
  };
  connectDB();
  
// Routes
app.use('/api/student', studentRoutes);
app.use('/api/hostel', hostelRoutes);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
