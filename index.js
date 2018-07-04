const BladeShield = {
  requestUri: '',
  remarks: [],
  errors: {
    ISSUE_ERROR: 'ISSUE_ERROR',
    SCRIPT_ERROR: 'Script error'
  },
  config: require('./src/config'),
  install: require('./src/install'),
  setRemarks: require('./src/set-remarks'),
  catchException: require('./src/catch-exception')
}
window.BladeShield = BladeShield
module.exports = BladeShield
