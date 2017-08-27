import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: block;
`

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
}
