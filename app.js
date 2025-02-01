// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/student'); // Import the student routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.log('❌ MongoDB connection failed:', err));

// Routes
app.use('/api/student', studentRoutes); // Register the student routes

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
