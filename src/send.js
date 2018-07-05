module.exports = (uri, error) => {
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify(error)
  }).then(response => {
    return response.json()
  }).then(data => {
    console.log('Created Gist:', data.html_url)
  })
  .catch(e => console.error(e))
}
