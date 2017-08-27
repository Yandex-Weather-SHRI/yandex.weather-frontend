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
import { routeNames } from 'utils/routeNames'
import { HomePage, TokenPage } from 'ui/pages'

import './styles/global'


const theme = {}
const store = createReduxStore()
const entry = document.getElementById('react-root')

// todo scenario: user has token in local storage
ReactDOM.render((
  <AppContainer>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={routeNames.index} component={HomePage} />
            <Route path={routeNames.token} component={TokenPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </AppContainer>
), entry)

if (module.hot) {
  // TODO: add hot reload
}
