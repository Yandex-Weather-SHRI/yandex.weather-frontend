import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  display: block;
`

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
}