import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  dateChanged: ['datetime'],
  timeChanged: ['datetime']
})

export const DatetimeTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const date = new Date()
export const INITIAL_STATE = Immutable({
  datetime: date
})

/* ------------- Reducers ------------- */
export const dateChanged = (state, { datetime }) => {
  const prevDatetime = state.datetime
  const nextDate = new Date(
    datetime.getFullYear(),
    datetime.getMonth(),
    datetime.getDate(),
    prevDatetime.getHours(),
    prevDatetime.getMinutes()
  )
  return state.merge({datetime: nextDate})
}

export const timeChanged = (state, { datetime }) => {
  const prevDatetime = state.datetime
  const nextDate = new Date(
    prevDatetime.getFullYear(),
    prevDatetime.getMonth(),
    prevDatetime.getDate(),
    datetime.getHours(),
    datetime.getMinutes()
  )
  return state.merge({datetime: nextDate})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATE_CHANGED]: dateChanged
  [Types.TIME_CHANGED]: timeChanged
})
