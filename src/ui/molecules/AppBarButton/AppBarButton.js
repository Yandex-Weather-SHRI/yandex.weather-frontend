import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Icon } from 'ui/atoms'


const Button = styled(Link)`
  min-width: 56px;
  height: 48px;
  display: flex;
  align-items: center;
  transition: opacity 150ms ease-in-out;
  user-select: none;
  justify-content: center;
  text-decoration: none;

  &:active {
    opacity: 0.5;
  }
`

const Text = styled.span`
  padding-right: 16px;
  font: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
`

export const AppBarButton = ({ icon, iconSize, to, onClick, children }) => (
  <Button to={to} onClick={onClick}>
    {icon && <Icon name={icon} size={iconSize} />}
    {children && <Text>{children}</Text>}
  </Button>
)

AppBarButton.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

AppBarButton.defaultProps = {
  to: '#',
  icon: null,
  iconSize: null,
  onClick: null,
  children: null,
}
