import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import logo from './logo.svg'
import './App.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class App extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 9
  }
  render () {
    return (
      <div style={{height: '1000px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyBR2VYaIyFFuQr_rcBY5Jc4dm5E9lOSIjY'}}
          center={this.props.center}
          zoom={this.props.zoom}
          >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
            />
        </GoogleMapReact>
      </div>
    )
  }
}

export default App
