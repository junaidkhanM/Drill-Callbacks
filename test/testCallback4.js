const boardFunc = require('../callback1');
const listFunc = require('../callback2');
const cardFunc = require('../callback3');
const callback = require('../callback4');
const fs = require('fs');
const path = ['boards', 'lists', 'cards'];

const thanosBoardId = 'mcu453ed';
const mindListId = 'qwsa221';

path.forEach((file, index) => {
  fs.readFile('data/' + file + '.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log('File read failed:', err);
      return;
    }
    const fileData = JSON.parse(jsonString);

    if (index === 0) {
      boardFunc(thanosBoardId, fileData, callback);
    } else if (index === 1) {
      listFunc(thanosBoardId, fileData, callback);
    } else {
      cardFunc(mindListId, fileData, callback);
    }
  });
});
