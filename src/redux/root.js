import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { updateClinicEpic } from './clinicEpic'
import { updatePositionEpic } from './positionEpic'

export const rootEpic = combineEpics(
  updateClinicEpic,
  updatePositionEpic
)

export const rootReducer = combineReducers({
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer,
  datetime: require('./datetimeRedux').reducer,
  position: require('./positionRedux').reducer
})
