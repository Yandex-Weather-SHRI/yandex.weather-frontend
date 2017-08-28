import { combineReducers } from 'redux'

import { userReducer as user } from './user/reducer'


const rootReducer = combineReducers({
  user,
})

export default rootReducer
