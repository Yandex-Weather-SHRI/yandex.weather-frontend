import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { closeModal } from '../../../redux/modal/actions'


export const Container = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12), 0 0 16px 0 rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  border-image-source:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4) 5%,
    rgba(255, 255, 255, 0.0) 20%,
    rgba(255, 255, 255, 0.0));
  border-image-slice: 1;
`

class SimpleModalInner extends React.Component {
  componentDidMount() {
    window.document.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.handleDocumentClick)
  }

  handleDocumentClick = (e) => {
    const clickOutsideModal = !this.containerEl.contains(e.target)
    if (clickOutsideModal) {
      this.props.closeModal()
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

SimpleModalInner.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export const SimpleModal = connect(null, { closeModal })(SimpleModalInner)

