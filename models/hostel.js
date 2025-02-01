const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  bedRequired: { type: Number },
  visitTime: { type: String },
  budget: { type: Number },
  recommendedBy: { type: String },
},
{ timestamps: true } // Add timestamps option here
);

const Hostel = mongoose.model('Hostel', hostelSchema);
module.exports = Hostel;
