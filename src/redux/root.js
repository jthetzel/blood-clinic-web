import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { fetchUserEpic } from './clinicEpic'

export const rootEpic = combineEpics(
  fetchUserEpic
)

export const rootReducer = combineReducers({
  counter: require('./counterRedux').reducer,
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer
})
