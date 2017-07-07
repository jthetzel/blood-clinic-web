import Rx from 'rxjs'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { getFirebase } from 'react-redux-firebase'
import { PositionTypes } from './positionRedux'
import { MapTypes } from './mapRedux'

const POSITION_REQUESTED = PositionTypes.POSITION_REQUESTED
const POSITION_RECEIVED = PositionTypes.POSITION_RECEIVED
const CHANGE_CENTER = MapTypes.CHANGE_CENTER

const positionReceived = position => ({ type: POSITION_RECEIVED, position })
const changeCenter = ({coords: { latitude, longitude }}) =>
      ({ type: CHANGE_CENTER, center: {lat: latitude, lng: longitude} })

const getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

export const updatePositionEpic = (action$, store) =>
  action$.ofType(
    POSITION_REQUESTED
  )
  .switchMap(action =>
             Rx.Observable.fromPromise(
               getPosition())
             .do((position) => {
               const { coords: { latitude, longitude }, timestamp } = position
               getFirebase().push('/positions', {latitude, longitude, timestamp})
             })
             .mergeMap((position) => ([
               positionReceived(position),
               changeCenter(position)
             ]))
            )
