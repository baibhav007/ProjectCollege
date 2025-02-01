const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const connectDB = require('../db'); // Import DB connection

router.post('/', async (req, res) => {
  await connectDB(); // Ensure DB is connected

  const {
    name,
    fatherName,
    motherName,
    tenthPassYear,
    tenthPercentage,
    twelfthPassYear,
    twelfthPercentage,
    streamInTwelfth,
    college,
    mobile,
    address,
  } = req.body;

  const newStudent = new Student({
    name,
    fatherName,
    motherName,
    tenthPassYear,
    tenthPercentage,
    twelfthPassYear,
    twelfthPercentage,
    streamInTwelfth,
    college,
    mobile,
    address,
  });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
