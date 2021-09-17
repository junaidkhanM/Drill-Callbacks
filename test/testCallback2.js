const callback = require('../callback2');
const fs = require('fs');

const boardId = 'abc122dc';

fs.readFile('data/lists.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const lists = JSON.parse(jsonString);
  callback(boardId, lists)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
