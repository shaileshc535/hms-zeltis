const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = function validateInput(data) {
  let errors = {};

  data.plan_name = !isEmpty(data.plan_name) ? data.plan_name : "";
  data.amount = !isEmpty(data.amount) ? data.amount : "";
  data.max_user = !isEmpty(data.max_user) ? data.max_user : "";
  data.max_patient = !isEmpty(data.max_patient) ? data.max_patient : "";

  if (Validator.isEmpty(data.plan_name)) {
    errors = "Plan Name is required";
  }

  if (!Validator.isLength(data.plan_name, { min: 2, max: 50 })) {
    errors = "Plan Name must be between 3 to 50 characters";
  }

  if (Validator.isEmpty(data.amount)) {
    errors = "Plan Amount is required";
  }

  if (Validator.isEmpty(data.max_user)) {
    errors = "Maximum User Allowed in Plan is required";
  }

  if (Validator.isEmpty(data.max_patient)) {
    errors = "Maximum Patient Allowed in Plan is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
