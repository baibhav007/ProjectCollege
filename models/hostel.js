const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  bedRequired: { type: Number },
  visitTime: { type: String },
  budget: { type: Number },
  recommendedBy: { type: String },
}, { timestamps: true });

const Hostel = mongoose.models.Hostel || mongoose.model("Hostel", HostelSchema);

export default Hostel;
