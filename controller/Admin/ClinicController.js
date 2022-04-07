const ClinicModel = require("../../model/ClinicModel");
// const ClinicValidation = require("../../validation/ClinicValidation");
var mongoose = require("mongoose");

module.exports.CreateClinic = (req, res) => {
  //   const { errors, isValid } = ClinicValidation(req.body);

  //   if (!isValid) {
  //     return res.status(400).json({
  //       success: false,
  //       msg: errors,
  //     });
  //   }

  let newClinic = ClinicModel(req.body);
  newClinic
    .save()
    .then((data) => {
      res.status(200).json({
        success: true,
        msg: "Clinic Created Successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        msg: err.message || "Something went wrong. Please try again",
        error: err,
      });
    });
};

module.exports.UpdateClinic = (req, res) => {
  const UpdateClinicDetails = {
    clinic_name: req.body.clinic_name,
    managed_by: req.body.managed_by,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    pincode: req.body.pincode,
    date_of_register: req.body.date_of_register,
    country: req.body.country,
    paln: req.body.paln,
    description: req.body.description,
    updated_at: new Date(),
  };

  const _id = req.body.id;

  if (_id !== null && _id !== "" && _id !== undefined) {
    ClinicModel.findByIdAndUpdate({ _id: req.body.id }, UpdateClinicDetails, {
      upsert: true,
      new: true,
    })
      .then((result) => {
        res.status(201).json({
          success: true,
          msg: "Clinic Updated Successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          msg: "Something Went Wrong, Please try again later",
          error: err,
        });
      });
  } else {
    res.status(400).json({
      success: false,
      msg: "Clinic Id Is Required",
      error: "",
    });
  }
};

module.exports.GetClinic = (req, res) => {
  if (req.params.id) {
    ClinicModel.find({ isdeleted: false, _id: req.params.id })
      .exec()
      .then((result) => {
        res.status(201).json({
          success: true,
          msg: "success",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          msg: "Clinic Fetch error...",
          error: err,
        });
      });
  } else {
    ClinicModel.find({ isdeleted: false })
      .exec()
      .then((result) => {
        res.status(201).json({
          success: true,
          msg: "success",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          msg: "Clinic Fetch error...",
          error: err,
        });
      });
  }
};

module.exports.UpdateClinicStatus = (req, res) => {
  ClinicModel.find({ _id: req.body.id })
    .then((result1) => {
      let status = result1[0].status;

      if (status !== true) {
        value = true;
      } else {
        value = false;
      }

      const updateStatus = {
        status: value,
      };

      ClinicModel.findByIdAndUpdate({ _id: req.body.id }, updateStatus, {
        upsert: true,
        new: true,
      }).then((result) => {
        res.status(201).json({
          success: true,
          msg: "success",
          data: result,
        });
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        msg: "Something Went Wrong, Please try again later",
        error: err,
      });
    });
};

module.exports.DeleteClinic = (req, res, next) => {
  const updateStatus = {
    isdeleted: true,
    deleted_at: new Date(),
  };

  ClinicModel.findByIdAndUpdate({ _id: req.body.id }, updateStatus, {
    upsert: true,
    new: true,
  })
    .then((result) => {
      res.status(201).json({
        success: true,
        msg: "success",
        data: result.deleted_at,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        msg: "Something Went Wrong, Please try again later",
        error: err,
      });
    });
};
