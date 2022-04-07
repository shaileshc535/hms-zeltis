const express = require("express");
const Router = express.Router();
const {
  CreateClinic,
  DeleteClinic,
  GetClinic,
  UpdateClinic,
  UpdateClinicStatus,
} = require("../../controller/Admin/ClinicController");

Router.get("/clinic", GetClinic);
Router.get("/clinic/:id", GetClinic);
Router.post("/clinic", CreateClinic);
Router.post("/clinic-update", UpdateClinic);
Router.post("/clinic-delete", DeleteClinic);
Router.post("/clinic-status", UpdateClinicStatus);

module.exports = Router;
