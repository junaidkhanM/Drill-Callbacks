function callback(boardId, board) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = board.find((item) => item.id === boardId);
      data ? resolve(data) : reject('Id not found!');
    }, 2 * 1000);
  });
}

module.exports = callback;
