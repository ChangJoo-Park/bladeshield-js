module.exports = function (match) {
  if (this.requestUri || this.requestUri.trim() === '') {
    return false
  }
  // TODO: Validate for BladeShield Server
  return true
}
