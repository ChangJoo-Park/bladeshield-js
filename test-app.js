BladeShield.setUri('<POST ISSUE URL>').setRemarks({
  userAgent: window.navigator.userAgent || ''
})

window.onerror = function (message, source, lineno, colno, error) {
  BladeShield.send(message, source, lineno, colno, error)
}

var a = 0;
try {
  a.b()
} catch (e) {
  BladeShield.catch(e)
}
