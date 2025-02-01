const cors = require('cors');
const mongoose = require('mongoose');
const Hostel = require('../models/hostel');

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

    // Handle POST request to add a hostel
    if (req.method === 'POST') {
      const { name, bedRequired, visitTime, budget,mobile, recommendedBy } = req.body;
      const newHostel = new Hostel({ name, bedRequired, visitTime,budget,recommendedBy, mobile });

      try {
        const savedHostel = await newHostel.save();
        res.status(201).json(savedHostel);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  });
};
