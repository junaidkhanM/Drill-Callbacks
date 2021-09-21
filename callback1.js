/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

function callback(boardId, board, cb) {
  setTimeout(() => {
    const data = board.find((item) => item.id === boardId);
    data ? cb(null, data) : cb('Id not found!');
  }, 2 * 1000);
}

module.exports = callback;
