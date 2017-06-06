import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeCenter: ['center'],
  changeZoom: ['level']
})

export const AnnotationsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  center: {lat: 47.5615, lng: -52.7126},
  zoom: 13
})

/* ------------- Reducers ------------- */

export const changeCenter = (state, { center }) => {
  return state.merge({center})

}

export const changeZoom = (state, { level }) => {
  return state.merge({zoom: level})
  // return state
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_CENTER]: changeCenter,
  [Types.CHANGE_ZOOM]: changeZoom
})
