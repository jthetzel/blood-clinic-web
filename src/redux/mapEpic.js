import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import { ClinicTypes } from './clinicRedux'
import { MapTypes } from './mapRedux'

const CLINIC_SELECTED = ClinicTypes.CLINIC_SELECTED
const CHANGE_CENTER = MapTypes.CHANGE_CENTER

const changeCenter = ({ lat, lng }) =>
      ({ type: CHANGE_CENTER, center: {lat, lng} })

export const updateMapEpic = (action$, store) =>
  action$.ofType(
    CLINIC_SELECTED
  )
  .map(({ id }) => store.getState().clinic.clinics.find(
    clinic => clinic['id'] === id))
  .mergeMap(({ lat, lng }) => ([
    changeCenter({ lat, lng })
  ]))
