const boardFunc = require('./callback1');
const listFunc = require('./callback2');
const cardFunc = require('./callback3');
const fs = require('fs');

function callback(path, thanosBoardId, mindListId, spaceListId) {
  setTimeout(() => {
    path.forEach((file, index) => {
      fs.readFile('data/' + file + '.json', 'utf8', (err, jsonString) => {
        if (err) {
          console.log('File read failed:', err);
          return;
        }
        const fileData = JSON.parse(jsonString);

        if (index === 0) {
          boardFunc(thanosBoardId, fileData)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        } else if (index === 1) {
          listFunc(thanosBoardId, fileData)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        } else {
          cardFunc(mindListId, fileData)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
          cardFunc(spaceListId, fileData)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
      });
    });
  }, 2 * 1000);
}

module.exports = callback;
