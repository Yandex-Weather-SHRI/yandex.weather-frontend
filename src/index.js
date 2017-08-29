import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import createReduxStore from 'redux/createReduxStore'
import { checkAuth } from 'redux/user/actions'

import { Application } from './Application'
import './styles/global'


const theme = {}
const store = createReduxStore()
store.dispatch(checkAuth()) // temp solution

const entry = document.getElementById('react-root')

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Application />
        </ThemeProvider>
      </Provider>
    </AppContainer>
  ), entry)
}

render()

if (module.hot) {
  module.hot.accept('./Application', render)
}
