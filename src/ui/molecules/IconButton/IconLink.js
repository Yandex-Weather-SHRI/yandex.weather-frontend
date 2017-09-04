import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Icon } from 'ui/atoms'

import { componentWrapperStyle, Wrapper, Text, propTypes, defaultProps } from './clickableIconModules'


const IconLinkWrapper = styled(Link)`
  ${props => props.style}
  text-decoration: none;

  &:link,
  &:active,
  &:visited {
    color: initial;
  }
`

const IconLink = ({ icon, to, children, fill, stroke }) => (
  <IconLinkWrapper {...{ to }} style={componentWrapperStyle}>
    <Wrapper>
      <Icon name={icon} fill={fill} stroke={stroke} />
      {children && <Text>{children}</Text>}
    </Wrapper>
  </IconLinkWrapper>
)

IconLink.propTypes = {
  ...propTypes,
  to: PropTypes.string.isRequired,
}

IconLink.defaultProps = {
  ...defaultProps,
  to: '/',
}

export { IconLink }
