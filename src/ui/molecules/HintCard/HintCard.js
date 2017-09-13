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
  padding-left: 8px;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #fff;
  margin-bottom: 16px;
`

const Text = styled.div`
  padding-left: 8px;
  font-size: 1.4rem;
  letter-spacing: 0.2px;
  color: #fff;
`

const Button = styled.button`
  min-width: 108px;
  height: 36px;
  padding: 10px 8px;
  border-radius: 2px;
  font: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`

const Close = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

const HintCard = ({ title, text, buttonText, onButtonClick, onCloseClick }) => (
  <Container>
    <Close onClick={onCloseClick}>
      <Icon name="cancel" fill="#fff" size={24} />
    </Close>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Button onClick={onButtonClick}>{buttonText}</Button>
  </Container>
)

HintCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
}

export {
  HintCard
}
