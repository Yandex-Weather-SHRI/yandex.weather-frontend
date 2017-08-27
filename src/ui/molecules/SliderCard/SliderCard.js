import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'ui/atoms'


const CardWrapper = styled.div`
  width: calc(100% - 66px);
  margin: 0 12px;
  padding: 28px 18px;
  background: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
`

const CardCaption = styled.p`
  margin: 0;
  text-align: center;
  font-size: 1.4rem;
`

const CardButton = styled.button`
  border-radius: 100px;
  border: solid 1px ${props => props.borderColor};
  color: ${props => props.color};
  background: transparent;
  font: inherit;
  font-size: 1.2rem;
  margin: 0 auto;
  margin-top: 14px;
`

const CardButtonWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 32px;
`

const CardButtonIcon = styled(Icon) `
  width: auto;
  height: auto;
  margin-left: -5px;
  margin-right: 5px;
`

export const SliderCard = ({
  bg,
  color,
  children,
  buttonText,
  iconName,
  borderColor,
}) => (
  <CardWrapper {...{ bg, color }}>
    <CardCaption>{children}</CardCaption>
    <CardButton {...{ color, borderColor }}>
      <CardButtonWrapper>
        {iconName && <CardButtonIcon name={iconName} />}
        <span>{buttonText}</span>
      </CardButtonWrapper>
    </CardButton>
  </CardWrapper>
)

SliderCard.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  borderColor: PropTypes.string,
}

SliderCard.defaultProps = {
  bg: '#fff',
  color: 'rgba(0, 0, 0, 0.87)',
  iconName: null,
  borderColor: '#e8e7e6',
}
