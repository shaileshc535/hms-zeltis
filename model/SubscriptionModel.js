const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  paln: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
    required: true,
  },
  plan_validity: {
    type: String,
  },
  plan_start: {
    type: String,
  },
  plan_end: {
    type: String,
  },
  plan_amount: {
    type: String,
  },
  paid_amount: {
    type: String,
  },
  pending_amount: {
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

module.exports = Subscription = mongoose.model(
  "Subscription",
  SubscriptionSchema
);
