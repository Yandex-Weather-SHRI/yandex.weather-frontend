import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'


const IconButtonWrapper = styled.button`
  &,
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    border: 0;
    background: 0;
    outline: 0;
    padding: 0;
  }
`

const IconButton = ({ iconName, onClick, ...props }) => (
  <IconButtonWrapper onClick={onClick}>
    <Icon name={iconName} {...props} />
  </IconButtonWrapper>
)

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default IconButton
