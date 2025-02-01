const cors = require('cors');
const mongoose = require('mongoose');
const Student = require('../models/student');

module.exports = async (req, res) => {
  // Enable CORS (if necessary)
  cors()(req, res, async () => {
    // MongoDB connection check
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Handle POST request to add a student
    if (req.method === 'POST') {
      const { name, fatherName, motherName,tenthPassYear,tenthPercentage, twelfthPassYear,twelfthPercentage,streamInTwelfth,college,  mobile, address } = req.body;
      const newStudent = new Student({ name, fatherName, motherName,tenthPassYear,tenthPercentage, twelfthPassYear,twelfthPercentage,streamInTwelfth,college, mobile,address });

      try {
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  });
};
