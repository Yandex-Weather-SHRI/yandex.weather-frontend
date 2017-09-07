import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sample } from 'utils/arrays'

import { BACKGROUNDS } from './backgrounds'


function getWeatherBackground(props) {
  return sample(BACKGROUNDS[props.condition])
}

export const WeatherBackground = styled.div`
  min-height: 304px;
  background-image: url(${getWeatherBackground});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-size: cover;
`

WeatherBackground.propTypes = {
  condition: PropTypes.oneOf(Object.keys(BACKGROUNDS)).isRequired,
}
