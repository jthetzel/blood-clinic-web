import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeLocation: ['location']
})

export const AnnotationsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  location: {}
})

/* ------------- Reducers ------------- */

export const changeLocation = (state, { location }) => {
  return state.merge({location})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_LOCATION]: changeLocation
})
