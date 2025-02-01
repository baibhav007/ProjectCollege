const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String  },
  motherName: { type: String },
  tenthPassYear: { type: Number },
  tenthPercentage: { type: Number },
  twelfthPassYear: { type: Number },
  twelfthPercentage: { type: Number },
  streamInTwelfth: { type: String },
  college: { type: String },
  mobile: { type: String, required: true },
  address: { type: String },
}, { timestamps: true } )// Add timestamps option here);

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
