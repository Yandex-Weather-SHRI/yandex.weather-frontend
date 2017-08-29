import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import {
  HomePage,
  SettingsPage,
  OnBoardingPage,
  FeedsPage,
  PassportRedirectPage,
} from 'ui/pages'
import { routeNames } from 'utils/routeNames'
import { withAuthentication } from 'hocs/withAuthentication'


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  -webkit-overflow-scrolling: touch;
`

export const Application = () => (
  <Container>
    <Router>
      <Switch>
        <Route
          exact
          path={routeNames.index}
          component={HomePage}
        />
        <Route
          path={routeNames.onboarding}
          component={OnBoardingPage}
        />
        <Route
          path={routeNames.feeds}
          component={withAuthentication(FeedsPage)}
        />
        <Route
          path={routeNames.settings}
          component={withAuthentication(SettingsPage)}
        />
        <Route
          path={routeNames.passportRedirect}
          component={PassportRedirectPage}
        />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  </Container>
)
