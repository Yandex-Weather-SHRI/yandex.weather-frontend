import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18px 16px 6px;
  border-radius: 4px 4px 0 0;
  background-image: linear-gradient(137deg, #09a4ff, #005bea);
`

const Title = styled.div`
  padding-left: 8px;
  margin-bottom: 4px;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 1.2;
  color: #fff;
`

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
`

const Content = styled.div`
  padding-left: 8px;
`

const Button = styled.button`
  padding: 10px 8px;
  border-radius: 2px;
  font: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #fff;
  background: none;
  border: none;

  & + & {
    margin-left: 16px;
  }

  &:focus {
    outline: none;
  }
`

const QuestionCard = ({ title, category, buttonYesText, buttonNoText, onButtonYesClick, onButtonNoClick }) => (
  <Container>
    <IconWrapper>
      <Icon name={`categories/${category}/default`} fill="#fff" size={64} />
    </IconWrapper>
    <Content>
      <Title>{title}</Title>
      <Button onClick={onButtonYesClick}>
        {buttonYesText}
      </Button>
      <Button onClick={onButtonNoClick}>
        {buttonNoText}
      </Button>
    </Content>
  </Container>
)

QuestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  buttonYesText: PropTypes.string,
  buttonNoText: PropTypes.string,
  onButtonYesClick: PropTypes.func.isRequired,
  onButtonNoClick: PropTypes.func.isRequired,
}

QuestionCard.defaultProps = {
  buttonYesText: 'ДА',
  buttonNoText: 'НЕТ',
}

export {
  QuestionCard
}
