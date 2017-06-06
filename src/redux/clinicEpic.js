import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { ClinicTypes } from './clinicRedux'
import { apiHost } from '../Constants'

const FETCH_USER = ClinicTypes.UPDATE_REQUESTED
const FETCH_USER_FULFILLED = ClinicTypes.UPDATE_COMPLETED

// action creators
export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// epic
export const fetchUserEpic = action$ =>
      action$.ofType(FETCH_USER)
      .mergeMap(action =>
                ajax.getJSON(apiHost)
                .map(response => fetchUserFulfilled(response))
               )
