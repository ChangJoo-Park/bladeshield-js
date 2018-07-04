module.exports = (match) => {
  console.log(this.requestUri)
  if (this.requestUri.trim() === '') {
    return false
  }
  // TODO: Validate for BladeShield Server
  return true
}
