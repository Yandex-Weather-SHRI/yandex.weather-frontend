import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import configureStore from './store'


const theme = {}
const store = configureStore()
const entry = document.getElementById('react-root')

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div>Яндекс.Погода</div>
        </ThemeProvider>
      </Provider>
    </AppContainer>
  ), entry)
}

render()

if (module.hot) {
  // TODO: add hot reload
}
