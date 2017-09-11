import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import R from 'ramda'
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
import { withAuthentication, withSettings } from 'hocs'
import { checkAuth } from 'redux/user/actions'
import { RootModal } from 'ui/organisms/RootModal/RootModal'


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    const { loading } = this.state

    if (loading) {
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
              component={R.compose(withAuthentication, withSettings)(FeedPage)}
            />
            <Route
              path={routeNames.settings}
              component={R.compose(withAuthentication, withSettings)(SettingsPage)}
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
