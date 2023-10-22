const nodemailer = require("nodemailer");
const { config } = require("dotenv");
config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// transporter.verify((err, succes) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Server is ready");
//   }
// });

module.exports = transporter;
