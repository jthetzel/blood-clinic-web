import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import { ClinicTypes } from './clinicRedux'
import { DatetimeTypes } from './datetimeRedux'
import { apiHost } from '../Constants'

// updateClinicEpic
const UPDATE_REQUESTED = ClinicTypes.UPDATE_REQUESTED
const UPDATE_FULFILLED = ClinicTypes.UPDATE_COMPLETED
const DATE_CHANGED = DatetimeTypes.DATE_CHANGED
const DATE_INCREMENTED = DatetimeTypes.DATE_INCREMENTED
const DATE_DECREMENTED = DatetimeTypes.DATE_DECREMENTED
const TIME_CHANGED = DatetimeTypes.TIME_CHANGED
export const updateFulfilled = payload => ({ type: UPDATE_FULFILLED, payload })
export const updateClinicEpic = (action$, store) =>
  action$.ofType(
    UPDATE_REQUESTED,
    DATE_CHANGED,
    DATE_INCREMENTED,
    DATE_DECREMENTED,
    TIME_CHANGED
  )
  .switchMap(action =>
            ajax({
              method: 'POST',
              url: apiHost,
              body: JSON.stringify({date: store.getState().datetime.datetime}),
              headers: {
                'Content-Type': 'application/json',
              }
            })
            .map(response => updateFulfilled(response.response))
           )
