const dotenv = require('dotenv');
dotenv.config();

const env = process.env;
const config = {
  port: env.PORT,
  mail: {
    host: env.SMTP_HOST,
    port: env.SMTP_PORT || 587,
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
    secure: env.SMTP_SECURE || false,
    from: env.SMTP_MAIL,
  },
};

module.exports = config;
