import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

require('array.prototype.find').shim()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
