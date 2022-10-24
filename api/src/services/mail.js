const nodemailer = require("nodemailer");
const config = require('../config');

function createTransport(host, port, user, pass) {
  return nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass,
    },
  });
}

async function sendMail(transporter, fromName, fromEmail, toName, toEmail, subject, html) {
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
  createTransport,
  sendMail,
}
