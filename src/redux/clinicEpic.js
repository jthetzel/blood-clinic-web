import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { ClinicTypes } from './clinicRedux'
import { apiHost } from '../Constants'

// updateClinicEpic
const UPDATE_REQUESTED = ClinicTypes.UPDATE_REQUESTED
const UPDATE_FULFILLED = ClinicTypes.UPDATE_COMPLETED
export const updateFulfilled = payload => ({ type: UPDATE_FULFILLED, payload })
export const updateClinicEpic = action$ =>
      action$.ofType(UPDATE_REQUESTED)
      .mergeMap(action =>
                ajax.getJSON(apiHost)
                .map(response => updateFulfilled(response))
               )

// openModalEpic
const CLINIC_SELECTED = ClinicTypes.CLINIC_SELECTED
const OPEN_MODAL = ClinicTypes.OPEN_MODAL
export const openModal = () => ({ type: OPEN_MODAL })
export const openModalEpic = action$ =>
  action$.ofType(CLINIC_SELECTED)
  .mergeMap(() => updateFulfilled())
