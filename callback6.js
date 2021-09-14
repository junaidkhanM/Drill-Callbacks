function callback(err, data) {
  setTimeout(() => {
    err ? console.log(err) : console.log(data);
  }, 2 * 1000);
}

module.exports = callback;
