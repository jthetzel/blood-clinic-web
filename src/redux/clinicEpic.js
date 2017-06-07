import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { ClinicTypes } from './clinicRedux'
import { DatetimeTypes } from './datetimeRedux'
import { apiHost } from '../Constants'

// updateClinicEpic
const UPDATE_REQUESTED = ClinicTypes.UPDATE_REQUESTED
const UPDATE_FULFILLED = ClinicTypes.UPDATE_COMPLETED
export const updateFulfilled = payload => ({ type: UPDATE_FULFILLED, payload })
export const updateClinicEpic = (action$, store) =>
      action$.ofType(UPDATE_REQUESTED)
      .mergeMap(action =>
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

// dateChangedEpic
const DATE_CHANGED = DatetimeTypes.DATE_CHANGED
export const dateChangedEpic = (action$, store) =>
  action$.ofType(DATE_CHANGED)
  .mergeMap(action =>
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

// dateIncrementedEpic
const DATE_INCREMENTED = DatetimeTypes.DATE_INCREMENTED
export const dateIncrementedEpic = (action$, store) =>
  action$.ofType(DATE_INCREMENTED)
  .mergeMap(action =>
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

// dateIncrementedEpic
const DATE_DECREMENTED = DatetimeTypes.DATE_DECREMENTED
export const dateDecrementedEpic = (action$, store) =>
  action$.ofType(DATE_DECREMENTED)
  .mergeMap(action =>
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

// timeChangedEpic
const TIME_CHANGED = DatetimeTypes.TIME_CHANGED
export const timeChangedEpic = (action$, store) =>
  action$.ofType(TIME_CHANGED)
  .mergeMap(action =>
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
