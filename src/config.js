module.exports = function (request_uri) {
  console.log('on config => ', request_uri)
  this.requestUri = request_uri
  return this
}
