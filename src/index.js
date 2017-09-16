import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import createReduxStore from 'redux/createReduxStore'

import { Application } from './Application'
import './styles/global'
import './utils/touch'


const store = createReduxStore()

const entry = document.getElementById('react-root')

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Application />
      </Provider>
    </AppContainer>
  ), entry)
}

render()

if (module.hot) {
  module.hot.accept('./Application', render)
}
