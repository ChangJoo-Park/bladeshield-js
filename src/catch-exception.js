const send = require('./send')

module.exports = function (error) {
  send(this.requestUri, {
    name: error.name,
    message: error.message,
    url: document.location.href,
    stack: error.stack
  })
}
