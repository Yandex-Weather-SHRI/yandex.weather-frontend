import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


export const componentWrapperStyle = css`
  background: transparent;
  cursor: pointer;
  min-width: 32px;
  height: 32px;
  padding: 0 4px;
  margin: 0;
`

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Text = styled.span`
  font-size: 1.4rem;
`

export const propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node,
  fill: PropTypes.string,
  stroke: PropTypes.string,
}

export const defaultProps = {
  fill: null,
  stroke: null,
  children: null,
}
