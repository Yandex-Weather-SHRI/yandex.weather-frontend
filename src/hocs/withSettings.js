import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageLoader } from 'ui/organisms'
import { getCategoriesSettings } from 'redux/user/actions'


export function withSettings(WrappedComponent) {
  class SettingsContainer extends Component {
    static propTypes = {
      settings: PropTypes.arrayOf(
        PropTypes.shape()
      ).isRequired,
      getCategoriesSettings: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getCategoriesSettings()
    }

    render() {
      const { settings } = this.props

      if (!settings.length) {
        return (
          <PageLoader />
        )
      }

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  function mapStateToProps(state) {
    return {
      settings: state.user.settings.categories,
    }
  }

  const mapDispatchToProps = {
    getCategoriesSettings,
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(SettingsContainer)
}
