import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { updateClinicEpic,
         dateChangedEpic,
         dateIncrementedEpic,
         dateDecrementedEpic,
         timeChangedEpic
       } from './clinicEpic'

export const rootEpic = combineEpics(
  updateClinicEpic,
  dateChangedEpic,
  dateIncrementedEpic,
  dateDecrementedEpic,
  timeChangedEpic
)

export const rootReducer = combineReducers({
  map: require('./mapRedux').reducer,
  clinic: require('./clinicRedux').reducer,
  datetime: require('./datetimeRedux').reducer
})
