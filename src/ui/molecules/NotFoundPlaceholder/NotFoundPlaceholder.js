import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
`

const IconWrapper = styled.div`
  margin-bottom: 17px;
`

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 2.6rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
`

const Text = styled.div`
  margin-bottom: 16px;
  font-size: 1.4rem;
  line-height: 1.24;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`

const Button = styled.button`
  padding: 10px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.5px;
  text-align: center;
  color: #000;
  background: none;
  border: none;
  user-select: none;

  &:focus {
    outline: none;
  }
`

export const NotFoundPlaceholder = ({ title, text, buttonText, onButtonClick }) => (
  <Container>
    <IconWrapper>
      <Icon name="placeholders/emptyFeedSun" size={113} />
    </IconWrapper>
    {title && (
      <Title>{title}</Title>
    )}
    <Text>{text}</Text>
    {buttonText && (
      <Button onClick={onButtonClick}>{buttonText}</Button>
    )}
  </Container>
)

NotFoundPlaceholder.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
}

NotFoundPlaceholder.defaultProps = {
  title: '',
  buttonText: '',
  onButtonClick: () => {},
}
