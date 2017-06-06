import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  counterIncrement: ['number'],
  counterDecrement: ['number']
})

export const AnnotationsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  counter: 0
})

/* ------------- Reducers ------------- */

export const increment = (state, { data }) => {
  return state.merge({counter: state.counter + 1})
}

export const decrement = (state, { data }) => {
  return state.merge({counter: state.counter - 1})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNTER_INCREMENT]: increment,
  [Types.COUNTER_DECREMENT]: decrement
})
