window.BladeShield = {
  requestUri: '',
  remarks: [],
  errors: {
    ISSUE_ERROR: 'ISSUE_ERROR',
    SCRIPT_ERROR: 'Script error'
  },
  // Utility
  validateUri(match) {
    if (this.requestUri.trim() === '') {
      return false
    }
    // TODO: Validate for BladeShield Server
    return true
  },
  validateIssue(message, source, lineno, colno, e) {
    if (e === undefined) {
      e = new Error()
    }

    var remarks = this.remarks || {}
    remarks['current_url'] = window.location.href

    var issue = {
      message: message,
      source: source || '',
      lineno: lineno || -1,
      colno: colno || -1,
      error: e.stack || '',
      remarks: remarks
    }
    return issue
  },
  // Set URI for request
  setUri(request_uri) {
    this.requestUri = request_uri
    return this
  },
  // Set default remarks
  setRemarks(remarks) {
    this.remarks = remarks
    return this
  },
  // send from try-catch
  catch (e, remarks) {
    if (this.requestUri === '') {
      return this
    }
    var message = e.message || ''
    var e = e.stack || ''
    return this.send(message, '', -1, -1, e)
  },
  send(message, source, lineno, colno, e) {
    if (this.requestUri === '') {
      return this
    }

    var issue = this.validateIssue(message, source, lineno, colno, e)

    if (issue.message === 'Script error') {
      return this
    }

    // axios({
    //   url: this.requestUri,
    //   method: 'POST',
    //   data: issue
    // })
    console.log('fetch => asdf', fetch)
    return this
  }
}
