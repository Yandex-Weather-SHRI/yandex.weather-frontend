import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'


const logger = createLogger({
  level: 'info',
  collapsed: true,
})

const middlewares = [
  thunk,
  logger,
]

function createReduxStore(history, initialState = {}) {
  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(createStore)

  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  )
}

export default createReduxStore
