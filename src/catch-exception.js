module.exports = (e, remarks) => {
  if (this.requestUri === '') {
    return this
  }
  var message = e.message || ''
  var e = e.stack || ''
  return this.send(message, '', -1, -1, e)
}
