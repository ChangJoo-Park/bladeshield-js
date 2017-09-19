const axios = require('axios')

BladeShield = {
  requestUri: '',
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
    var issue = {
      message: message,
      source: source || '',
      lineno: lineno || -1,
      colno: colno || -1,
      error: e || new Error()
    }
    return issue
  },
  // Set URI for request
  setUri: function(request_uri) {
    this.requestUri = request_uri
    return this
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
