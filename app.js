const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');
const hostelRoutes = require('./routes/hostel');

const app = express();
app.use(bodyParser.json());

// Enable Mongoose debug mode
mongoose.set('debug', true);

// MongoDB Connection with Error Logging
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
      socketTimeoutMS: 45000,          // 45 seconds timeout
    });
    console.log('✅ MongoDB connected successfully.');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
}

connectDB();

// Routes
app.use('/api/student', studentRoutes);
app.use('/api/hostel', hostelRoutes);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
