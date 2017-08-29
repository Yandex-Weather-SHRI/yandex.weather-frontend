import { combineReducers } from 'redux'

import { userReducer as user } from './user/reducer'
import { mainInfoReducer as mainInfo } from './mainInfo/reducer'


const rootReducer = combineReducers({
  user,
  mainInfo,
})

export default rootReducer
