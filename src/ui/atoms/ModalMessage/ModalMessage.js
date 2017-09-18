import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 24px;
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
  line-height: normal;
  ${props => props.contentStyle}
`

export const ModalMessage = ({ title, content, contentStyle }) => (
  <Container>
    {title && (
      <Title>
        {title}
      </Title>
    )}
    <Content {...{ contentStyle }}>
      {content}
    </Content>
  </Container>
)

ModalMessage.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentStyle: PropTypes.string,
}

ModalMessage.defaultProps = {
  title: '',
  contentStyle: '',
}
