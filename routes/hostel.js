const express = require('express');
const router = express.Router();
const Hostel = require('../models/hostel');

// POST /api/hostel
router.post('/', async (req, res) => {
  const { name, mobile, bedRequired, visitTime, budget, recommendedBy } = req.body;

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
});

module.exports = router;
