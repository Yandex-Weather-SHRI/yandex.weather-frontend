import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

import { modalNames, modals } from 'constants/modals'
import { CardOptionsModal } from 'ui/modals/CardOptionsModal'
import { ShareCardModal } from 'ui/modals/ShareCardModal'
import { ShareHintModal } from 'ui/modals/ShareHintModal'
import { CategoryAddResponseModal } from '../../modals/CategoryAddResponseModal'


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  transition: opacity 300ms ease;
  z-index: 9000;
  ${p => p.hidden && css`
    opacity: 0;
    pointer-events: none;
  `}
`

const modalComponents = {
  [modals.cardOptions]: CardOptionsModal,
  [modals.shareCard]: ShareCardModal,
  [modals.shareHint]: ShareHintModal,
  [modals.categoryAddResponse]: CategoryAddResponseModal,
}

class RootModalInner extends React.Component {
  static propTypes = {
    isModalOpened: PropTypes.bool.isRequired,
    openedModal: PropTypes.oneOf([...modalNames, '']),
    meta: PropTypes.shape(),
  }

  static defaultProps = {
    openedModal: '',
    meta: {},
  }

  componentWillReceiveProps(nextProps) {
    this.handleCloseOpen(nextProps)
  }

  /* eslint-disable class-methods-use-this */
  preventTouchMove(event) {
    event.preventDefault()
  }
  /* eslint-enable class-methods-use-this */

  handleCloseOpen(nextProps) {
    const willOpen = !this.props.isModalOpened && nextProps.isModalOpened
    const willClose = this.props.isModalOpened && !nextProps.isModalOpened
    if (willOpen) {
      document.body.style.overflow = 'hidden'
      document.body.addEventListener('touchmove', this.preventTouchMove)
    }
    else if (willClose) {
      document.body.style.overflow = 'auto'
      document.body.removeEventListener('touchmove', this.preventTouchMove)
    }
  }

  render() {
    const { isModalOpened, openedModal, meta } = this.props
    const ConcreteModal = modalComponents[openedModal]
    return (
      <Container hidden={!isModalOpened} onClick={() => null}>
        {ConcreteModal && <ConcreteModal {...{ meta }} />}
      </Container>
    )
  }
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
