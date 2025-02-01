const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: String,
  motherName: String,
  mobile: { type: String, required: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
