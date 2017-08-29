import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { HomePage, PassportRedirectPage } from 'ui/pages'
import { routeNames } from 'utils/routeNames'


export const Application = () => (
  <Router>
    <Switch>
      <Route exact path={routeNames.index} component={HomePage} />
      <Route path={routeNames.passportRedirect} component={PassportRedirectPage} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Router>
)
