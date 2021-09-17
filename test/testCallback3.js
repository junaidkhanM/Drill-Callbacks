const callback = require('../callback3');
const fs = require('fs');

const listId = 'jwkh245';

fs.readFile('data/cards.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const cards = JSON.parse(jsonString);
  callback(listId, cards)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
