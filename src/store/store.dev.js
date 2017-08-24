import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from 'modules'


const logger = createLogger({
  level: 'info',
  collapsed: true,
})

const middlewares = [
  thunk,
  logger,
]

function configureStore(history, initialState = {}) {
  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(createStore)

  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  )

  return store
}

export default configureStore
