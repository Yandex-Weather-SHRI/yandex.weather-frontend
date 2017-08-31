import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Container = styled.div`
  height: 48px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

const Title = styled.span`
  font-size: 1.6rem;
  text-align: center;
`

export const AppBar = ({ title, elementLeft, elementRight }) => (
  <Container>
    <Wrapper>
      {elementLeft}
    </Wrapper>
    <Title>
      {title}
    </Title>
    <Wrapper>
      {elementRight}
    </Wrapper>
  </Container>
)

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  elementLeft: PropTypes.node,
  elementRight: PropTypes.node,
}

AppBar.defaultProps = {
  elementLeft: null,
  elementRight: null,
}
