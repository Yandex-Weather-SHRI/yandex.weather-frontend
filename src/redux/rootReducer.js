import { combineReducers } from 'redux'

import { userReducer as user } from './user/reducer'
import { forecastReducer as forecast } from './forecast/reducer'


const rootReducer = combineReducers({
  user,
  forecast,
})

export default rootReducer
