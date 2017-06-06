import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './App.css'
import Map from './containers/Map'

const store = configureStore()
// work around for material-ui tap events
injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Map />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
