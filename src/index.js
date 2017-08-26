import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import createReduxStore from 'redux/createReduxStore'
import './styles/global'


const theme = {}
const store = createReduxStore()
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
