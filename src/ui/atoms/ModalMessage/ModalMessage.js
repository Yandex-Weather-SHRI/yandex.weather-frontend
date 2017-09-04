import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`
const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  ${props => props.contentStyle}
`

export const ModalMessage = ({ title, content, contentStyle }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Content {...{ contentStyle }}>
      {content}
    </Content>
  </Container>
)

ModalMessage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  contentStyle: PropTypes.string,
}

ModalMessage.defaultProps = {
  contentStyle: '',
}
