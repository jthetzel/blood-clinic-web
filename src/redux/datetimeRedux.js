import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  datetimeChanged: ['datetime']
})

export const AnnotationsTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const date = new Date()
export const INITIAL_STATE = Immutable({
  datetime: date

})

/* ------------- Reducers ------------- */

export const datetimeChanged = (state, { datetime }) => {
  return state.merge({datetime})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATETIME_CHANGED]: datetimeChanged
})
