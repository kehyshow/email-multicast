const express = require('express');
const mail = require('./services/mail');
const config = require('./config');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
})

// async function checkByPage(page) {
//   const res = await db.getMultiple(page);
//   res.data.map(book => {
//     const timeslot = JSON.parse(book.schedule);
//     const { date, time } = timeslot[0];
//     const diff = moment(date).diff(moment(), 'days');
//     if (diff === 0) {
//       mail.sendReminderMail(
//         book.email,
//         book.personalName,
//         `${book.firstName} ${book.lastName}`,
//         time,
//         'www.gmeet.com/123456'
//       );
//     } else if (diff === -1) {
//       mail.sendFeedbackMail(
//         book.email,
//         book.personalName,
//         'www.trustpilot.com'
//       );
//     }
//   });
// }

// async function main() {
//   const count = await db.getBookCount();  
//   const pages = Math.ceil(count / config.listPerPage);
//   for (let i = 0; i < pages; i++) {
//     await checkByPage(i + 1);
//   }  
// }

// main();
