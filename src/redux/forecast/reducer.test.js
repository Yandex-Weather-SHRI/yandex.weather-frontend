import { forecastReducer } from './reducer'
import { weatherGetSuccess } from './actions'


describe('forecastReducer', () => {
  const payload = {
    fact: {
      condition: 'пасмурно',
      feels_like: 19,
      humidity: 64,
      icon: 'bkn_d',
      pressure_mm: 748,
      soil_temp: 17,
      temp: 19,
      wind_speed: 1,
    },
    geo_object: {
      locality: { id: 213, name: 'Москва' },
    },
  }

  const initialState = {
    fetching: true,
    fetched: false,
  }

  it('should put weather to state', () => {
    expect(forecastReducer(initialState, weatherGetSuccess(payload))).toEqual(expect.objectContaining({
      fetching: false,
      fetched: true,
      ...payload,
    }))
  })
})
