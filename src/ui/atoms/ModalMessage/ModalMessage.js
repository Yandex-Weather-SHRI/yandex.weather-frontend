import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  color: rgba(0, 0, 0, 0.87);
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`

export const ModalMessage = ({ title, text }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Text>
      {text}
    </Text>
  </Container>
)

ModalMessage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
