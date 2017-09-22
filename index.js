const axios = require('axios')

BladeShield = {
  requestUri: '',
  remarks: [],
  errors: {
    ISSUE_ERROR: 'ISSUE_ERROR',
    SCRIPT_ERROR: 'Script error'
  },
  // Utility
  validateUri: function(match) {
    if (this.requestUri.trim() === '') {
      return false
    }
    // TODO: Validate for BladeShield Server
    return true
  },
  validateIssue: function(message, source, lineno, colno, e) {
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
  setUri: function(request_uri) {
    this.requestUri = request_uri
    return this
  },
  // Set default remarks
  setRemarks: function(remarks) {
    this.remarks = remarks
    return this
  },
  // send from try-catch
  catch: function(e, remarks) {
    if (this.requestUri === '') {
      return this
    }
    var message = e.message || ''
    var e = e.stack || ''
    return this.send(message, '', -1, -1, e)
  },
  send: function(message, source, lineno, colno, e) {
    if (this.requestUri === '') {
      return this
    }

    var issue = this.validateIssue(message, source, lineno, colno, e)

    if (issue.message === 'Script error') {
      return this
    }

    axios({
      url: this.requestUri,
      method: 'POST',
      data: issue
    })
    return this
  }
}
