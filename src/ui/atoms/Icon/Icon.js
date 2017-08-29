import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


export const IconWrapper = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.size}px;
  height: ${p => p.size}px;

  svg {
    transition: fill 150ms ease-in-out;
    max-width: ${p => p.size}px;
    max-height: ${p => p.size}px;
    ${p => p.fill && css`
      fill: ${p.fill};
    `}
    ${p => p.stroke && css`
      stroke: ${p.stroke};
    `}
  }
`

export const Icon = ({ name, ...props }) => {
  let Svg
  try {
    Svg = require(`./icons/${name}.svg`).default // eslint-disable-line
  }
  catch (error) {
    return null
  }

  return (
    <IconWrapper {...props}>
      <Svg />
    </IconWrapper>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  size: PropTypes.number,
}

Icon.defaultProps = {
  fill: '',
  stroke: '',
  size: 24,
}
