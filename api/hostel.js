import cors from 'cors';
import mongoose from 'mongoose';
import Hostel from '../models/hostel.js';

export default async (req, res) => {
  // Enable CORS (if necessary)
  cors()(req, res, async () => {
    // MongoDB connection check
    if (mongoose.connection.readyState === 0) {
      try {
        await mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      } catch (err) {
        return res.status(500).json({ message: 'Database connection failed', error: err.message });
      }
    }

    // Handle POST request to add a hostel
    if (req.method === 'POST') {
      const { name, mobile, bedRequired, visitTime, budget, recommendedBy } = req.body;
      const newHostel = new Hostel({ name, mobile, bedRequired, visitTime, budget, recommendedBy });

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
