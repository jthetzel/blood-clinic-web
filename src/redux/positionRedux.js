import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  positionRequested: [],
  positionReceived: ['position']
})

export const PositionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  positionRequesting: false,
  latitude: null,
  longitude: null,
  timestamp: null
})

/* ------------- Reducers ------------- */

export const positionRequested = (state) => {
  return state.merge({positionRequesting: true})
}

export const positionReceived = (state, { position }) => {
  const { coords: { latitude, longitude }, timestamp } = position
  return state.merge({latitude, longitude, timestamp, positionRequesting: false})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.POSITION_REQUESTED]: positionRequested,
  [Types.POSITION_RECEIVED]: positionReceived
})
