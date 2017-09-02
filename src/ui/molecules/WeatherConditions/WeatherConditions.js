import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { IconWithText } from 'ui/atoms/IconWithText/IconWithText'


const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  height: 48px;
`

const PureWeatherConditions = ({ humidity, pressure, waterTemp, wind }) => {
  const icons = [
    {
      iconName: 'weather-conditions/wind',
      text: `${wind} м/с, СЗ`,
    },
    {
      iconName: 'weather-conditions/humidity',
      text: `${humidity}%`,
    },
    {
      iconName: 'weather-conditions/pressure',
      text: (<span>{pressure} <span style={{ fontSize: 10 }}>мм рт. ст.</span></span>),
    },
    {
      iconName: 'weather-conditions/waterTemp',
      text: `${waterTemp}°`,
    },
  ]

  return (
    <Container>
      {icons.map(icon =>
        <IconWithText {...icon} key={icon.iconName} itemOffsetLeft="16px" iconOffset="4px" />
      )}
    </Container>
  )
}


PureWeatherConditions.propTypes = {
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  waterTemp: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    humidity: state.forecast.fact.humidity,
    pressure: state.forecast.fact.pressure_mm,
    waterTemp: state.forecast.fact.soil_temp,
    wind: state.forecast.fact.wind_speed,
  }
}

export const WeatherConditions = connect(mapStateToProps)(PureWeatherConditions)
