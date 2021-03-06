import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { IconWithText } from 'ui/atoms/IconWithText/IconWithText'


const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8px;
  height: 48px;
`


export const PureWeatherConditions = ({ humidity, pressure, wind }) => {
  const icons = [
    {
      iconName: 'weather-conditions/main-page/wind',
      text: `${wind} м/с, СЗ`,
    },
    {
      iconName: 'weather-conditions/main-page/humidity',
      text: `${humidity}%`,
    },
    {
      iconName: 'weather-conditions/main-page/pressure',
      text: (<span>{pressure} <span style={{ fontSize: 10 }}>мм рт. ст.</span></span>),
    },
  ]

  return (
    <Container>
      {icons.map(icon =>
        <IconWithText {...icon} key={icon.iconName} itemOffsetLeft="10px" iconOffset="4px" />
      )}
    </Container>
  )
}


PureWeatherConditions.propTypes = {
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    humidity: state.forecast.fact.humidity,
    pressure: state.forecast.fact.pressure_mm,
    wind: state.forecast.fact.wind_speed,
  }
}

export const WeatherConditions = connect(mapStateToProps)(PureWeatherConditions)
