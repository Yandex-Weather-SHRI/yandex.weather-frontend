import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavigationBar } from 'ui/molecules'

import { BACKGROUNDS, getWeatherBackground } from './backgrounds'


const Container = styled.div`
  min-height: 304px;
  background-image: url(${getWeatherBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const WeatherBackground = ({ condition }) => (
  <Container {...{ condition }}>
    <NavigationBar />
  </Container>
)

WeatherBackground.propTypes = {
  condition: PropTypes.oneOf(Object.keys(BACKGROUNDS)).isRequired,
}
