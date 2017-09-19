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
  validateIssue: function(message, source, lineno, colno, e, remarks) {
    if (e === undefined) {
      e = new Error()
    }
    var issue = {
      message: message,
      source: source || '',
      lineno: lineno || -1,
      colno: colno || -1,
      error: e.stack || '',
      remarks: remarks || {}
    }
    return issue
  },
  // Set URI for request
  setUri: function(request_uri) {
    this.requestUri = request_uri
    return this
  },
  send: function(message, source, lineno, colno, e, remarks) {
    console.log('#send')
    if (this.requestUri === '') {
      return this
    }
    var issue = this.validateIssue(message, source, lineno, colno, e, remarks)
    if (issue.message === 'Script error') {
      return this
    }
    console.log(issue)
    // axios({
    //   url: this.requestUri,
    //   method: 'POST',
    //   data: issue
    // })
    return this
  }
}
