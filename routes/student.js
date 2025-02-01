const express = require('express');
const Student = require('../models/student'); // We'll create the model next
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, fatherName, motherName, mobile } = req.body;
  const newStudent = new Student({ name, fatherName, motherName, mobile });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
