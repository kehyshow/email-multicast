const express = require("express");
const cors = require("cors");
const config = require('./config');
const mail = require('./services/mail');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sendMail', async (req, res) => {
  let status;
  try {
    // const { fromName, fromEmail, toName, toEmail, subject, body } = req.body;
    console.log(req.body);
    // await mail.sendMail(
    //   'ironheart0225@gmail.com',
    //   'subject',
    //   'Hello World!',
    // );
    status = "success";
  } catch(error) {
    console.log('error:', error);
    status = "failture";
  }
  res.json({ status });
});

app.listen(config.port, () => {
  console.log("Started server at: " + config.port);
});
