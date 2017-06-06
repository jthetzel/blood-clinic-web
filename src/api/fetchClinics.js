const {fetch, Request, Response, Headers} = require('fetch-ponyfill')()

const fetchClinics = () => {
  const uri = 'https://bloodclinicserver.herokuapp.com/api'
  const date = new Date()
  const payload = {'date': date}
  const headers = new Headers({'Content-Type': 'application/json'})
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: headers
  })
    .then((response) =>
          response.json())
    .then(json => {
      console.log(json)
      return json
    })
    .catch(error => {
      console.log(error)
    })
}

export default fetchClinics
