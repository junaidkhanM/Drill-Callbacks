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
