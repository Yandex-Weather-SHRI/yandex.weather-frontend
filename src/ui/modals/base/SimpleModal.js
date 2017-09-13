import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { closeModal } from 'redux/modal/actions'
import { hintUtil } from 'utils/hintUtil'


export const Container = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12), 0 0 16px 0 rgba(0, 0, 0, 0.2);
`

class SimpleModalContainer extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
    hintId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  static defaultProps = {
    hintId: null,
  }

  componentDidMount() {
    window.document.addEventListener('click', this.handleDocumentClick, true)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.handleDocumentClick, true)
  }

  handleDocumentClick = (event) => {
    if (this.containerEl) {
      const clickOutsideModal = !this.containerEl.contains(event.target)

      if (clickOutsideModal) {
        if (this.props.hintId) {
          hintUtil.markSeen(this.props.hintId)
        }
        this.props.closeModal()
      }
    }
  }

  render() {
    const { className, children } = this.props

    return (
      <Container {...{ className }} innerRef={r => this.containerEl = r}>
        {children}
      </Container>
    )
  }
}

export const SimpleModal = connect(null, { closeModal })(SimpleModalContainer)

