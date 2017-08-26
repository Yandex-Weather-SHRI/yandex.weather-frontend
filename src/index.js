import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import createReduxStore from 'redux/createReduxStore'
import { WeatherConditions } from 'ui/molecules/WeatherConditions/WeatherConditions'

import './styles/global'

const theme = {}
const store = createReduxStore()
const entry = document.getElementById('react-root')

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div>
            <div>Яндекс.Погода</div>
            <WeatherConditions
              wind="10 м/с, СЗ"
              humidity="60%"
              pressure={<span>756 <span style={{ fontSize: 10 }}>мм рт. ст.</span></span>}
              waterTemp="10°"
            />
          </div>
        </ThemeProvider>
      </Provider>
    </AppContainer>
  ), entry)
}

render()

if (module.hot) {
  // TODO: add hot reload
}
