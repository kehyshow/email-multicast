const express = require("express");
const cors = require("cors");
const config = require('./config');
const mail = require('./services/mail');

const app = express();
app.use(express.json());
app.use(cors());

let mailSwitch = true;
let transporter;

async function handleEmail({ fromName, fromEmail, toName, toEmail, subject, body }) {
  if (!transporter)  {
    transporter = mail.createTransport(
      mailSwitch ? config.mail1.host : config.mail2.host,
      config.mail.port,
      mailSwitch ? config.mail1.user : config.mail2.user,
      mailSwitch ? config.mail1.pass : config.mail2.pass,
    );
    if (!transporter) {
      return false;
    }
  }

  return await mail.sendMail(
    transporter,
    fromName,
    mailSwitch ? config.mail1.from : config.mail2.from,
    toName,
    toEmail,
    subject,
    body,
  ); 
}

app.post('/sendMail', async (req, res) => {
  let status;
  try {
    let ret = await handleEmail(req.body);
    if (!ret) {
      mailSwitch = !mailSwitch;
      ret = await handleEmail(req.body);
    }

    status = ret ? "success" : "failure";
  } catch(error) {
    console.log('error:', error);
    status = "failure";
  }
  res.json({ status });
});

app.listen(config.port, () => {
  console.log("Started server at: " + config.port);
});
