const nodeMailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
const transporter = nodeMailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  service: "Gmail",
  secure: process.env.MAIL_SECURE === "true", // true for 465, false for other
  // ports
  auth: {
    user: process.env.MAIL_USER, // generated ethereal user
    pass: process.env.MAIL_PASSWORD, // generated ethereal password
  },
});
module.exports = transporter;
