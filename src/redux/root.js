import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { updateClinicEpic, dateChangedEpic } from './clinicEpic'

export const rootEpic = combineEpics(
  updateClinicEpic,
  dateChangedEpic
)

export const rootReducer = combineReducers({
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer,
  datetime: require('./datetimeRedux').reducer
})
