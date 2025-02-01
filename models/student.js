// models/student.js

const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String },
  motherName: { type: String },
  mobile: { type: String, required: true },
}, { timestamps: true });

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
