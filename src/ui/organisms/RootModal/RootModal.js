import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { CardOptionsModal } from '../../modals/CardOptionsModal'
import { modalNames, modals } from '../../../constants/modals'
import { ShareCardModal } from '../../modals/ShareCardModal';


const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  transition: opacity 0.3s ease;
  z-index: 10;
  ${({ hidden }) => hidden
    ? 'opacity: 0; pointer-events: none'
    : ''
}
`

const modalComponents = {
  [modals.cardOptions]: CardOptionsModal,
  [modals.shareCard]: ShareCardModal,
}

class RootModalInner extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.handleCloseOpen(nextProps)
  }

  handleCloseOpen(nextProps) {
    const willOpen = !this.props.isModalOpened && nextProps.isModalOpened
    const willClose = this.props.isModalOpened && !nextProps.isModalOpened
    if (willOpen) {
      window.document.body.style.overflow = 'hidden'
      return
    }

    if (willClose) {
      window.document.body.style.overflow = 'auto'
    }
  }

  render() {
    const { isModalOpened, openedModal, meta } = this.props
    const ConcreteModal = modalComponents[openedModal]
    return (
      <Container hidden={!isModalOpened}>
        {ConcreteModal && <ConcreteModal {...{ meta }} />}
      </Container>
    )
  }
}

RootModalInner.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  openedModal: PropTypes.oneOf([...modalNames, '']),
  meta: PropTypes.shape(),
}

RootModalInner.defaultProps = {
  openedModal: '',
  meta: {},
}

function mapStateToProps(state) {
  const { openedModal, meta } = state.modal
  return {
    isModalOpened: Boolean(openedModal),
    openedModal,
    meta,
  }
}

export const RootModal = connect(mapStateToProps)(RootModalInner)
