import { combineReducers } from 'redux'

import { userReducer as user } from './user/reducer'
import { forecastReducer as forecast } from './forecast/reducer'
import { feedReducer as feed } from './feed/reducer'
import { filtersReducer as filters } from './filters/reducer'


const rootReducer = combineReducers({
  user,
  forecast,
  feed,
  filters,
})

export default rootReducer
