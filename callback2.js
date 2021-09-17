function callback(boardId, lists) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data;
      for (const id in lists) {
        if (id === boardId) {
          data = lists[id];
        }
      }
      data ? resolve(data) : reject('Id not found!');
    }, 2 * 1000);
  });
}

module.exports = callback;
