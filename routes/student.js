// routes/student.js

const express = require('express');
const Student = require('../models/student');  // Import the Student model
const router = express.Router();

// Handle POST request to create a new student
router.post('/', async (req, res) => {
  const { name, fatherName, motherName, mobile } = req.body;

  // Create a new student document
  const newStudent = new Student({ name, fatherName, motherName, mobile });

  try {
    // Save the new student to the database
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent); // Send the saved student as a response
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle any errors
  }
});

module.exports = router;
