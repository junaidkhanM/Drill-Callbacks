function callback(boardId, board, cb) {
  setTimeout(() => {
    const data = board.find((item) => item.id === boardId);
    data ? cb(null, data) : cb('Id not found!');
  }, 2 * 1000);
}

module.exports = callback;
