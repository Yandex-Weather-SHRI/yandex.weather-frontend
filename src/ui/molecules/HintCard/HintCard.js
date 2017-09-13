import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'


const Container = styled.div`
  position: relative;
  padding: 32px 24px 16px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-image: linear-gradient(133deg, #09a4ff, #005bea);
  box-shadow: 0 2px 6px 0 rgba(50, 71, 136, 0.12);
`

const Title = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 1.24;
  padding-left: 8px;
  margin-bottom: 16px;
`

const Text = styled.div`
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 0.2px;
  line-height: 1.24;
  padding-left: 8px;
  margin-bottom: 16px;
`

const Button = styled.button`
  min-width: 108px;
  height: 36px;
  padding: 0 8px;
  border-radius: 2px;
  font: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
  background: none;
  border: none;
  user-select: none;
  transition: opacity 150ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 0.5;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 150ms ease-in-out;

  &:active {
    opacity: 0.5;
  }
`

export const HintCard = ({ title, text, buttonText, onButtonClick, onCloseClick }) => (
  <Container>
    <CloseButton onClick={onCloseClick}>
      <Icon name="cancel" fill="#fff" size={24} />
    </CloseButton>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Button onClick={onButtonClick}>
      {buttonText}
    </Button>
  </Container>
)

HintCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
}
