const mongoose = require('mongoose');
const Hostel = require('../models/hostel'); // Adjust the path according to your folder structure

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const {
      name,
      mobile,
      bedRequired,
      visitTime,
      budget,
      recommendedBy,
    } = req.body;

    const newHostel = new Hostel({
      name,
      mobile,
      bedRequired,
      visitTime,
      budget,
      recommendedBy,
    });

    try {
      const savedHostel = await newHostel.save();
      res.status(201).json(savedHostel);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
