import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { closeModal } from '../redux/modal/actions';
import { MODAL_AUTO_CLOSE_DELAY } from '../constants/modals';


export const withModalAutoClose = (WrappedComponent) => {
  class Wrapper extends Component {
    static PropTypes = {
      closeModal: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.closeTimer = setTimeout(this.props.closeModal, MODAL_AUTO_CLOSE_DELAY)
    }

    componentWillUnmount() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  return connect(null, { closeModal })(Wrapper)
}
