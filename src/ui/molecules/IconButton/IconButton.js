import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'


const IconButtonWrapper = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  min-width: 32px;
  height: 32px;
  padding: 0 4px;
  margin: 0;
  font: inherit;

  &:focus {
    outline: 0;
  }
`
const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Text = styled.span`
  font-size: 1.4rem;
  font-family: sans-serif;
  padding: 5px;
`

const IconButton = ({ icon, onClick, children, fill, stroke, ...props }) => (
  <IconButtonWrapper onClick={onClick} {...props}>
    <Wrapper>
      <Icon name={icon} fill={fill} stroke={stroke} />
      {children && <Text>{children}</Text>}
    </Wrapper>
  </IconButtonWrapper>
)

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
}

IconButton.defaultProps = {
  fill: null,
  stroke: null,
}

export default IconButton
