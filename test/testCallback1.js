const callback = require('../callback1');
const fs = require('fs');

const boardId = 'abc122dc';

fs.readFile('data/boards.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const board = JSON.parse(jsonString);
  callback(boardId, board)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
