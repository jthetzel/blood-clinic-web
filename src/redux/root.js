import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { firebaseStateReducer } from 'react-redux-firebase'
import { updateClinicEpic } from './clinicEpic'
import { updatePositionEpic } from './positionEpic'

export const rootEpic = combineEpics(
  updateClinicEpic,
  updatePositionEpic
)

export const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer,
  datetime: require('./datetimeRedux').reducer,
  position: require('./positionRedux').reducer
})
