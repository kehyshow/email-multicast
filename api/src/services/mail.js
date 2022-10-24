const nodemailer = require("nodemailer");
const config = require('../config');

async function sendMail(fromName, fromEmail, toName, toEmail, subject, html) {
  const transporter = nodemailer.createTransport({
    host: config.mail.host,
    port: config.mail.port,
    auth: {
      user: config.mail.user,
      pass: config.mail.pass,
    },
  });

  const ret = true;
  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: `"${toName}" <${toEmail}>`,
    subject: subject,
    html: html,
  }, (err, info) => {
    console.log(info);
    if (err) {
      ret = false;
    }
  });
  return ret;
}

module.exports = {
  sendMail,
}
