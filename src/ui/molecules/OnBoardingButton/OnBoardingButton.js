import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { RoundedButton, Icon } from 'ui/atoms'
import { getCategoryGradient } from 'styles/utils'


const StyledButton = styled(RoundedButton) `
  background: ${p => p.fill ? getCategoryGradient(p.category) : '#fff'};
  color: ${p => p.fill ? '#fff' : 'rgba(0, 0, 0, 0.87)'};
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  padding: 16px;
  height: 48px;
  position: relative;
  margin: 1px;

  & > span {
    margin-left: 8px;
  }

  &:after {
    content: '';
    position: absolute;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04);
    background: ${p => !(p.category === 'none') ? getCategoryGradient(p.category) : '#e8e7e6'};
    z-index: -1;
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    border-radius: 32px;
  }
`

export const OnBoardingButton = ({ children, icon, fill, category, onClick }) => (
  <StyledButton onClick={onClick} {...{ fill, category }}>
    {icon && (<Icon name={icon} fill={fill ? '#fff' : '#000'} size={16} />)}
    <span>{children}</span>
  </StyledButton>
)

OnBoardingButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  fill: PropTypes.bool,
  category: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

OnBoardingButton.defaultProps = {
  children: null,
  icon: null,
  fill: false,
  category: 'none',
}
