import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { clinics } from '../Constants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateRequested: [],
  updateCompleted: ['payload'],
  clinicSelected: ['id'],
  clinicDeselected: [],
  openModal: []
})

export const ClinicTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoaded: false,
  clinics: clinics,
  currentRate: {},
  dailyRate: {},
  selected: null,
  modalOpen: false
})

/* ------------- Reducers ------------- */

export const updateRequested = (state, action) => {
  return state.merge({isLoaded: false})
}

export const updateCompleted = (state, { payload }) => {
  const { current_rate, daily_rates } = payload
  return state.merge({
    currentRate: current_rate,
    dailyRate: daily_rates,
    isLoaded: true})
}

export const clinicSelected = (state, { id }) => {
  return state.merge({selected: id, modalOpen: true})
}

export const clinicDeselected = (state) => {
  return state.merge({selected: null, modalOpen: false})
}

export const openModal = (state) => {
  return state.merge({modalOpen: true})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_REQUESTED]: updateRequested,
  [Types.UPDATE_COMPLETED]: updateCompleted,
  [Types.CLINIC_SELECTED]: clinicSelected,
  [Types.CLINIC_DESELECTED]: clinicDeselected,
  [Types.OPEN_MODAL]: openModal
})
