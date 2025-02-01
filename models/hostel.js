const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  bedRequired: { type: Number, required: true },
  visitTime: { type: String, required: true },
  budget: { type: Number, required: true },
  recommendedBy: { type: String },
}, { timestamps: true });

const Hostel = mongoose.models.Hostel || mongoose.model("HostelRequest", HostelSchema);

export default Hostel;
