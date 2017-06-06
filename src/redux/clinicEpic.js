import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { ClinicTypes } from './clinicRedux'
import { apiHost } from '../Constants'

const date = new Date('2017-06-06T12:30:25.326Z')

// updateClinicEpic
const UPDATE_REQUESTED = ClinicTypes.UPDATE_REQUESTED
const UPDATE_FULFILLED = ClinicTypes.UPDATE_COMPLETED
export const updateFulfilled = payload => ({ type: UPDATE_FULFILLED, payload })
export const updateClinicEpic = action$ =>
      action$.ofType(UPDATE_REQUESTED)
      .mergeMap(action =>
                ajax({
                  method: 'POST',
                  url: apiHost,
                  body: JSON.stringify({date: date}),
                  headers: {
                    'Content-Type': 'application/json',
                  }
                })
                .map(response => updateFulfilled(response.response))
               )
