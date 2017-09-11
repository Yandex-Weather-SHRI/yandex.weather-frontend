import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { Icon } from 'ui/atoms'

import { SimpleModal } from './base/SimpleModal'


const fadeInTop = keyframes`
  100% {
    opacity: 1;
    transform: translateY(-110%);
  }
`

const ModalContent = styled(SimpleModal)`
  padding: 0 16px 0 8px;
  height: 70px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: ${p => p.top}px;
  left: 8px;
  right: 8px;
  opacity: 0;
  transform: translateY(-130%);
  animation: ${fadeInTop} 150ms 300ms ease-in-out forwards;

  &:after {
    content: '';
    border-radius: inherit;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(112deg, #09a4ff, #005bea);
  }

  &:before {
    content: '';
    background-color: #0062ec;
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    position: absolute;
    bottom: -9px;
    right: 54px;
    z-index: -1;
  }
`

const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.24;
  letter-spacing: 0.2px;
  color: #fff;
  margin-left: 16px;
`

export const ShareHintModal = ({ meta }) => (
  <ModalContent {...meta}>
    <Icon name="people" size={64} />
    <Text>Поделитесь советом со своими близкими или друзьями</Text>
  </ModalContent>
)

ShareHintModal.propTypes = {
  meta: PropTypes.shape({
    top: PropTypes.number.isRequired,
  }).isRequired,
}
