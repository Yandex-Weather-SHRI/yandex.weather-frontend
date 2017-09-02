import { combineReducers } from 'redux'

import { userReducer as user } from './user/reducer'
import { forecastReducer as forecast } from './forecast/reducer'
import { feedReducer as feed } from './feed/reducer'
import { filtersReducer as filters } from './filters/reducer'
import { modalReducer as modal } from './modal/reducer'


const rootReducer = combineReducers({
  user,
  forecast,
  feed,
  filters,
  modal,
})

export default rootReducer
