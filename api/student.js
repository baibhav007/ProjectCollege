const mongoose = require('mongoose');
const Student = require('../models/student'); // Adjust the path according to your folder structure

module.exports = async (req, res) => {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
