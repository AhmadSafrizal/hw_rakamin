const fs = require('fs');

const message = 'message.log';
const messageLog = 'log.txt';

fs.readFile(message, 'utf8', (err, data) => {
  fs.appendFile(messageLog, data, (err) => {
    if (err) {
      console.error(`Gagal menulis ke file ${messageLog}:`, err);
    } else {
      console.log(`${message} berhasil disalin ke ${messageLog}.`);
    }
  });
});
