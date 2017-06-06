import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'

const FETCH_USER = 'UPDATE_REQUESTED'
const FETCH_USER_FULFILLED = 'UPDATE_COMPLETED'

// action creators
export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// epic
export const fetchUserEpic = action$ =>
      action$.ofType(FETCH_USER)
      .mergeMap(action =>
                ajax.getJSON(`https://api.github.com/users/${action.payload}`)
                .map(response => fetchUserFulfilled(response))
               )
