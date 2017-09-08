import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Icon } from 'ui/atoms'


const CardWrapper = styled(Link)`
  width: 100%;
  min-height: 108px;
  height: auto;
  padding: 16px;
  background: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  align-items: center;
  text-decoration: none;
`

const CardCaption = styled.p`
  font-size: 1.4rem;
  text-align: center;
`

const CardButton = styled.button`
  border-radius: 100px;
  border: solid 1px ${props => props.borderColor};
  color: ${props => props.color};
  background: transparent;
  font: inherit;
  font-size: 1.2rem;
  margin-top: 14px;
  height: 32px;
  user-select: none;
  font-weight: 500;

  &:focus {
    outline: 0;
  }
`

const CardButtonWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  height: 100%;
`

const CardButtonIcon = styled(Icon) `
  margin-left: -4px;
  margin-right: 4px;
`

export const SliderCard = ({
  bg,
  color,
  children,
  buttonText,
  icon,
  borderColor,
  linkTo,
}) => (
  <CardWrapper {...{ bg, color, to: linkTo }}>
    <CardCaption>{children}</CardCaption>
    {buttonText && (
      <CardButton {...{ color, borderColor }}>
        <CardButtonWrapper>
          {icon && <CardButtonIcon name={icon} size={12} />}
          <span>{buttonText}</span>
        </CardButtonWrapper>
      </CardButton>
    )}
  </CardWrapper>
)

SliderCard.propTypes = {
  linkTo: PropTypes.string.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string,
  icon: PropTypes.string,
  borderColor: PropTypes.string,
}

SliderCard.defaultProps = {
  bg: '#fff',
  color: 'rgba(0, 0, 0, 0.87)',
  icon: null,
  borderColor: '#e8e7e6',
  buttonText: null,
}
