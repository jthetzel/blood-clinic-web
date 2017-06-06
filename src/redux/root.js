import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { updateClinicEpic } from './clinicEpic'

export const rootEpic = combineEpics(
  updateClinicEpic
)

export const rootReducer = combineReducers({
  counter: require('./counterRedux').reducer,
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer
})
