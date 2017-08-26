import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavigationBar } from 'ui/molecules'
import { WeatherBlock } from 'ui/organisms'

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
    <WeatherBlock
      locationText="Погода в Москве"
      weatherIcon="bkn_d"
      temperature="+18"
      condition="Облачно с прояснениями"
      feel="Ощущается как +16°"
    />
  </Container>
)

WeatherBackground.propTypes = {
  condition: PropTypes.oneOf(Object.keys(BACKGROUNDS)).isRequired,
}
