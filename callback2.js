/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

function callback(boardId, lists, cb) {
  setTimeout(() => {
    let data;
    for (const id in lists) {
      if (id === boardId) {
        data = lists[id];
      }
    }
    data ? cb(null, data) : cb('Id not found!');
  }, 2 * 1000);
}

module.exports = callback;
