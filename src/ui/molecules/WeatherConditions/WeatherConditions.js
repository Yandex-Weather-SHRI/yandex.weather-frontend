import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconWithText } from 'ui/atoms/IconWithText/IconWithText'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const WeatherConditions = ({ humidity, pressure, waterTemp, wind }) => {
  const icons = [
    {
      iconName: 'weather-conditions/wind',
      text: wind,
    },
    {
      iconName: 'weather-conditions/humidity',
      text: humidity,
    },
    {
      iconName: 'weather-conditions/pressure',
      text: pressure,
    },
    {
      iconName: 'weather-conditions/waterTemp',
      text: waterTemp,
    },
  ]

  return (
    <Container>
      {icons.map(icon =>
        <IconWithText {...icon} />
      )}
    </Container>
  )
}


WeatherConditions.propTypes = {
  humidity: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  waterTemp: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
}
