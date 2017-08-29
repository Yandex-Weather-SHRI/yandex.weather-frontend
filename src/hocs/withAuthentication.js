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
      requestLogin: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.checkAuthentication(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuthentication(nextProps)
    }

    checkAuthentication(props) {
      if (!props.user.oAuthToken) {
        this.props.requestLogin(props.location.pathname)
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

  const mapDispatchToProps = {
    requestLogin,
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthenticationContainer)
}
