import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const TitleWrapper = styled.h1`
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  padding: 26px 22px 10px 8px;
  font-size: 18px;
  &:first-letter {
    text-transform: uppercase;
  }
`

const Title = ({ children }) => (
  <TitleWrapper>
    {children}
  </TitleWrapper>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
