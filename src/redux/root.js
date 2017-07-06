import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { updateClinicEpic } from './clinicEpic'

export const rootEpic = combineEpics(
  updateClinicEpic
)

export const rootReducer = combineReducers({
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer,
  datetime: require('./datetimeRedux').reducer,
  location: require('./locationRedux').reducer
})
