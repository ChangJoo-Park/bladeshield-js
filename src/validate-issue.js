module.exports = function (message, source, lineno, colno, e) {
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
}
