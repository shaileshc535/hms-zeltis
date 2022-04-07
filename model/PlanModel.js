const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  plan_name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  max_user: {
    type: Number,
  },
  max_patient: {
    type: Number,
  },
  plan_validity: {
    type: String,
  },
  storeg_limit: {
    type: String,
  },
  date_of_activation: {
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

module.exports = Plan = mongoose.model("Plan", PlanSchema);
