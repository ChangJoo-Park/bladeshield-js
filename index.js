window.BladeShield = {
  requestUri: '',
  remarks: [],
  errors: {
    ISSUE_ERROR: 'ISSUE_ERROR',
    SCRIPT_ERROR: 'Script error'
  },
  send: require('./src/send'),
  validateUri: require('./src/validate-uri'),
  validateIssue: require('./src/validate-issue'),
  setUri: require('./src/set-uri'),
  setRemarks: require('./src/set-remarks'),
  catchException: require('./src/catch-exception')
}
