import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../../atoms'


const IconButtonWrapper = styled.a`
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: initial;
    cursor: pointer;
  }
`

const IconButton = ({ iconName, onClick }) => (
  <IconButtonWrapper onClick={onClick}>
    <Icon name={iconName} />
  </IconButtonWrapper>
)

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default IconButton
