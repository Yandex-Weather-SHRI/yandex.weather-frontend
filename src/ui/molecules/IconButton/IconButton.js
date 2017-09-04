import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'

import { componentWrapperStyle, Wrapper, Text, propTypes, defaultProps } from './clickableIconModules'


const IconButtonWrapper = styled.button`
  ${props => props.style}
  font: inherit;
  border: 0;

  &:focus {
    outline: 0;
  }
`

const IconButton = ({ icon, onClick, children, fill, stroke, ...props }) => (
  <IconButtonWrapper onClick={onClick} {...props} style={componentWrapperStyle}>
    <Wrapper>
      <Icon name={icon} fill={fill} stroke={stroke} />
      {children && <Text>{children}</Text>}
    </Wrapper>
  </IconButtonWrapper>
)

IconButton.propTypes = {
  ...propTypes,
  onClick: PropTypes.func,
}

IconButton.defaultProps = {
  ...defaultProps,
  onClick: () => null,
}

export { IconButton }
