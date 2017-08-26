import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import good1 from 'assets/images/weather-backgrounds/good-1.png'
import good2 from 'assets/images/weather-backgrounds/good-2.png'
import good3 from 'assets/images/weather-backgrounds/good-3.png'
import { NavigationBar } from 'ui/molecules'


const BACKGROUNDS = {
  good: [good1, good2, good3],
}

const randomBackground = Math.round(Math.random() * (BACKGROUNDS.good.length - 1))

function getWeatherBackground(props) {
  return BACKGROUNDS[props.condition][randomBackground]
}

const Container = styled.div`
  min-height: 304px;
  background-image: url(${getWeatherBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const WeatherBackground = ({ condition }) => (
  <Container condition={condition}>
    <NavigationBar />
  </Container>
)

WeatherBackground.propTypes = {
  condition: PropTypes.oneOf(Object.keys(BACKGROUNDS)).isRequired,
}
