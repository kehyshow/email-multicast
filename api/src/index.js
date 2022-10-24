const cors = require("cors");
const express = require("express");
const config = require('./config');
const mail = require('./services/mail');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/sendMail', (req, res) => {
  mail.sendMail(
    'dante08290730@gmail.com',
    'subject',
    'Hello World!',
  );
});

app.listen(config.port, () => {
  console.log("Started server at: " + config.port);
});
