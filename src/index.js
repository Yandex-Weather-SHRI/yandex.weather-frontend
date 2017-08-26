import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import createReduxStore from 'redux/createReduxStore'
import { HomePage } from 'ui/pages'

import './styles/global'


const theme = {}
const store = createReduxStore()
const entry = document.getElementById('react-root')

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </AppContainer>
  ), entry)
}

render()

if (module.hot) {
  // TODO: add hot reload
}
