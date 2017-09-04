import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { requestLogin } from 'redux/user/actions'


export function withAuthentication(WrappedComponent) {
  class AuthenticationContainer extends Component {
    static propTypes = {
      user: PropTypes.shape({
        oAuthToken: PropTypes.string,
      }).isRequired,
    }

    componentDidMount() {
      this.checkAuthentication(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuthentication(nextProps)
    }

    /* eslint-disable class-methods-use-this */
    checkAuthentication(props) {
      if (!props.user.oAuthToken) {
        requestLogin({ nextRoute: props.location.pathname })
      }
    }

    render() {
      if (!this.props.user.oAuthToken) {
        return null
      }

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    }
  }

  return connect(mapStateToProps)(AuthenticationContainer)
}
