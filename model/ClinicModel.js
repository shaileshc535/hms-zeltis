const mongoose = require("mongoose");

const ClinicSchema = new mongoose.Schema({
  clinic_name: {
    type: String,
    required: true,
  },
  managed_by: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  date_of_register: {
    type: String,
  },
  address: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  country: {
    type: String,
  },
  paln: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  isdeleted: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
  deleted_at: {
    type: Date,
  },
});

module.exports = Clinic = mongoose.model("Clinic", ClinicSchema);
