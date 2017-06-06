// note: this is deprecated and persists for debugging.
// API requests are handled in epics within the redux directory

import { apiHost } from '../Constants'
const {fetch, Headers} = require('fetch-ponyfill')()

const fetchClinics = () => {
  const uri = apiHost
  const date = new Date('2017-06-06T12:30:25.326Z')
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
