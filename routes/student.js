// api/student.js

const mongoose = require('mongoose');
const Student = require('../models/student');

// MongoDB connection (adjust connection settings for Vercel)
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  
  try {
    await mongoose.connect('mongodb+srv://<your-mongo-uri>', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
};

module.exports = async (req, res) => {
  await connectDB(); // Ensure DB connection before handling the request

  if (req.method === 'POST') {
    const { name, fatherName, motherName, mobile } = req.body;
    const newStudent = new Student({ name, fatherName, motherName, mobile });

    try {
      const savedStudent = await newStudent.save();
      res.status(201).json(savedStudent); // Return the saved student as a response
    } catch (err) {
      res.status(400).json({ message: err.message }); // Handle any errors
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Method not allowed for other HTTP methods
  }
};
