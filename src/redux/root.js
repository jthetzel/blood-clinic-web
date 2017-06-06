import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import pingEpic from './pingEpic'

export const rootEpic = combineEpics({
  pingEpic
})

export const rootReducer = combineReducers({
  counter: require('./counterRedux').reducer,
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer
})
