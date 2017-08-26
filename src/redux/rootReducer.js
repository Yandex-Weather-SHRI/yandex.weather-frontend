import { combineReducers } from 'redux'

import { sessionReducer as session } from './session/reducer'


const rootReducer = combineReducers({
  session,
})

export default rootReducer
