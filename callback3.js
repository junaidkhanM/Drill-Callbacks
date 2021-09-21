/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

function callback(listId, cards, cb) {
  setTimeout(() => {
    let data;
    for (const id in cards) {
      if (id === listId) {
        data = cards[id];
      }
    }
    data ? cb(null, data) : cb('Id not found!');
  }, 2 * 1000);
}

module.exports = callback;
