
import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  bedRequired: { type: Number },
  visitTime: { type: String },
  budget: { type: Number },
  recommendedBy: { type: String },
}, { timestamps: true });

const Hostel = mongoose.model('Hostel', hostelSchema);
export default Hostel;
