import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  dateChanged: ['datetime']
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
  console.log(state)
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

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATE_CHANGED]: dateChanged
})
