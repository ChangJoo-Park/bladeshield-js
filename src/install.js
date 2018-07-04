const send = require('./send')

module.exports = function () {
  console.log('on install => ', this)
  window.onerror = (message, source, lineno, colno, error) => {
    send(this.requestUri, {
      message,
      source,
      lineno,
      colno,
      error
    })
  }
}
