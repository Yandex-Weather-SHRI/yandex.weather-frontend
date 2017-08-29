import { createReducer } from 'redux-act'

import * as actions from './actions'


const defaultMainInfoState = {
  fetching: false,
  fact: {
    condition: '',
    icon: '',
    feels_like: 0,
    temp: 0,
    humidity: 0,
    pressure_mm: 0,
    wind_speed: 0,
    soil_temp: 0,
  },
  geo_object: {
    locality: {
      name: '',
    },
  },
}

export const mainInfoReducer = createReducer({
  [actions.weatherGetRequest](state) {
    return {
      ...state,
      fetching: true,
    }
  },

  [actions.weatherGetSuccess](state, payload) {
    return {
      ...state,
      ...payload,
      fetching: false,
    }
  },
}, defaultMainInfoState)
