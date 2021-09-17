function callback(listId, cards) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data;
      for (const id in cards) {
        if (id === listId) {
          data = cards[id];
        }
      }
      data ? resolve(data) : reject('Id not found!');
    }, 2 * 1000);
  });
}

module.exports = callback;
