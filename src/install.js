const send = require('./send')

module.exports = function () {
  window.onerror = (message, source, lineno, colno, error) => {
    const { stack } = error
    send(this.requestUri, {
      message,
      source,
      lineno,
      colno,
      stack
    })
  }
}
