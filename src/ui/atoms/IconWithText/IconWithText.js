import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon as IconBase } from '../Icon/Icon'


const Container = styled.div`
  display: flex;
  align-items: center;

  & + & {
    ${props => props.itemOffsetLeft
    ? `margin-left: ${props.itemOffsetLeft};`
    : `margin-top: ${props.itemOffsetTop};`
}
  }
`

const Icon = styled(IconBase)`
  display: inline-block;
  margin-right: ${({ iconOffset }) => iconOffset};
`

const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #494848;
  ${({ textStyles }) => textStyles}
`

export const IconWithText = (
  {
    iconName,
    text,
    itemOffsetTop,
    itemOffsetLeft,
    iconOffset,
    textStyles,
    onClick,
    className,
  }
) =>
  <Container {...{ itemOffsetTop, itemOffsetLeft, onClick, className }}>
    <Icon name={iconName} iconOffset={iconOffset} />
    <Text {...{ textStyles }}>{text}</Text>
  </Container>

IconWithText.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  itemOffsetTop: PropTypes.string,
  itemOffsetLeft: PropTypes.string,
  iconOffset: PropTypes.string,
  textStyles: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

IconWithText.defaultProps = {
  itemOffsetTop: '',
  itemOffsetLeft: '',
  iconOffset: '',
  textStyles: '',
  className: '',
  onClick: () => {},
}
