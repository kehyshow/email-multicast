const nodemailer = require("nodemailer");
const config = require('../config');

async function sendMail(to, subject, html) {
  const transporter = nodemailer.createTransport({
    host: config.mail.host,
    port: config.mail.port,
    auth: {
      user: config.mail.user,
      pass: config.mail.pass,
    },
  });

  const info = await transporter.sendMail({
    from: config.mail.from,
    to: to,
    subject: subject,
    html: html,
  });

  console.log('email:', info);
}

module.exports = {
  sendMail,
}
