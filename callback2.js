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
