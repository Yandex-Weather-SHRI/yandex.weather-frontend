import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'


const isDevelopment = process.env.NODE_ENV === 'development'
const middlewares = [
  thunk,
]

if (isDevelopment) {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger')
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  })

  middlewares.push(logger)
}
/* eslint-disable no-underscore-dangle */
else if (typeof (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === 'object') {
  Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__).forEach((key) => {
    delete window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key]
  })
}
/* eslint-enable no-underscore-dangle */

function createReduxStore(history, initialState = {}) {
  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(createStore)

  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    isDevelopment ? window.devToolsExtension && window.devToolsExtension() : undefined
  )
}

export default createReduxStore
