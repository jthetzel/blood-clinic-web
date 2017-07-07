import Rx from 'rxjs'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import { PositionTypes } from './positionRedux'

const POSITION_REQUESTED = PositionTypes.POSITION_REQUESTED
const POSITION_RECEIVED = PositionTypes.POSITION_RECEIVED

const positionReceived = position => ({ type: POSITION_RECEIVED, position })

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
             .map((position) => positionReceived(position))
            )
