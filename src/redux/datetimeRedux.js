import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  dateChanged: ['datetime'],
  dateIncremented: [],
  dateDecremented: [],
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
  const nextDatetime = new Date(
    datetime.getFullYear(),
    datetime.getMonth(),
    datetime.getDate(),
    prevDatetime.getHours(),
    prevDatetime.getMinutes()
  )
  return state.merge({datetime: nextDatetime})
}

export const timeChanged = (state, { datetime }) => {
  const prevDatetime = state.datetime
  const nextDatetime = new Date(
    prevDatetime.getFullYear(),
    prevDatetime.getMonth(),
    prevDatetime.getDate(),
    datetime.getHours(),
    datetime.getMinutes()
  )
  return state.merge({datetime: nextDatetime})
}

export const dateIncremented = (state) => {
  const nextDatetime = new Date(state.datetime)
  nextDatetime.setDate(state.datetime.getDate() + 1)
  return state.merge({datetime: nextDatetime})
}

export const dateDecremented = (state) => {
  const nextDatetime = new Date(state.datetime)
  nextDatetime.setDate(state.datetime.getDate() - 1)
  return state.merge({datetime: nextDatetime})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATE_CHANGED]: dateChanged,
  [Types.DATE_INCREMENTED]: dateIncremented,
  [Types.DATE_DECREMENTED]: dateDecremented,
  [Types.TIME_CHANGED]: timeChanged
})
