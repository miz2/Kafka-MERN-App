const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
// ✅ Debugging environment variables
console.log("ENV EMAIL_USER:", process.env.EMAIL_USER);
console.log("ENV EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ exists" : "❌ missing");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: `"Automation App" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}`);
  } catch (err) {
    console.error('❌ Failed to send email:', err.message);
  }
};

module.exports = sendEmail;
