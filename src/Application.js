import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
  FeedPage,
  PassportRedirectPage,
} from 'ui/pages'
import { routeNames } from 'utils/routeNames'
import { withAuthentication } from 'hocs/withAuthentication'
import { checkAuth } from 'redux/user/actions'
import { RootModal } from 'ui/organisms/RootModal/RootModal'


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  -webkit-overflow-scrolling: touch;
`

class ApplicationContainer extends Component {
  static propTypes = {
    checkAuth: PropTypes.func.isRequired,
  }

  state = {
    loading: true,
  }

  componentDidMount() {
    this.props.checkAuth().then(() => {
      this.setState({ loading: false })
    })
  }

  render() {
    if (this.state.loading) {
      return null
    }

    return (
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
              path={routeNames.feed}
              component={withAuthentication(FeedPage)}
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
        <RootModal />
      </Container>
    )
  }
}

const mapDispatchToProps = {
  checkAuth,
}

export const Application = connect(
  null,
  mapDispatchToProps
)(ApplicationContainer)
