const callback = require('../callback3');
const fs = require('fs');

const listId = 'jwkh245';

fs.readFile('data/cards.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const cards = JSON.parse(jsonString);
  callback(listId, cards, cb);
});

const cb = (err, data) => {
  err ? console.log(err) : console.log(data);
};
