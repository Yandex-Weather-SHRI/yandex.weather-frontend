import { combineReducers } from 'redux'

import { userReducer as user } from './user/reducer'
import { forecastReducer as forecast } from './forecast/reducer'
import { feedReducer as feed } from './feed/reducer'


const rootReducer = combineReducers({
  user,
  forecast,
  feed,
})

export default rootReducer
