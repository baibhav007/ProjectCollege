// models/student.js

const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String },
  motherName: { type: String },
  tenthPassYear: { type: Number },
  tenthPercentage: { type: Number },
  twelfthPassYear: { type: Number },
  twelfthPercentage: { type: Number },
  streamInTwelfth: { type: String },
  college: { type: String },
  mobile: { type: String, required: true },
  address: { type: String },

}, { timestamps: true });

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
