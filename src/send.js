module.exports = (message, source, lineno, colno, e) => {
  if (this.requestUri === '') {
    return this
  }

  const issue = this.validateIssue(message, source, lineno, colno, e)

  if (issue.message === 'Script error') {
    return this
  }

  return this
}
