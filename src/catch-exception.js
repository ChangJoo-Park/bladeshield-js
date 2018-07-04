const send = require('./send')

module.exports = function (error) {
  send(this.requestUri, error)
}
