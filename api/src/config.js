const dotenv = require('dotenv');
dotenv.config();

const env = process.env;
const config = {
  port: env.PORT,
  mail: {
    port: env.SMTP_PORT || 587,
    secure: env.SMTP_SECURE || false,
  },
  mail1: {
    host: env.SMTP_HOST_1,
    user: env.SMTP_USER_1,
    pass: env.SMTP_PASS_1,
    from: env.SMTP_MAIL_1,
  },
  mail2: {
    host: env.SMTP_HOST_2,
    user: env.SMTP_USER_2,
    pass: env.SMTP_PASS_2,
    from: env.SMTP_MAIL_2,
  },
};

module.exports = config;
