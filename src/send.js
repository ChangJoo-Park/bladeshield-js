const pckg = require('../package.json')

module.exports = (uri, error) => {
  const {
    message,
    source,
    lineno,
    colno,
    stack
  } = error

  const payload = {
    message,
    source,
    lineno,
    colno,
    stack,
    version: pckg.version
  }

  fetch(uri, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log('data => ', data)
    })
    .catch(e => console.error(e))
}
