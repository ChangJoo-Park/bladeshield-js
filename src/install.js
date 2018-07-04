const send = require('./send')

module.exports = function () {
  console.log('install')
  window.onerror = function (message, source, lineno, colno, error) {
    send({
      message,
      source,
      lineno,
      colno,
      error
    })
  }
}
