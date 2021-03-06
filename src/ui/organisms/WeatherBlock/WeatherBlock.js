import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { IconButton } from 'ui/molecules'
import { Icon } from 'ui/atoms'
import { getNumberWithSign } from 'utils/weatherAdapters'


const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 4px;
`

const LocationText = styled.span`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`

const TemperatureBlock = styled.div`
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const TemperatureRow = styled.div`
  font-size: 4.8rem;
  line-height: 7.2rem;
  display: flex;
  align-items: center;
  margin-top: 16px;
`

const WeatherIcon = styled(Icon) `
  width: 58px;
  height: 58px;
  margin-right: 10px;

  svg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
`

const Facts = styled.div`
  font-size: 1.4rem;
  line-height: 1.43;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Condition = styled.span`
  &:first-letter {
    text-transform: uppercase;
  }
`

export const PureWeatherBlock = ({ locality, weatherIcon, temperature, condition, feel }) => (
  <div>
    <LocationRow>
      <IconButton fill="#fff" icon="geolocation" onClick={() => null} />
      <LocationText>{locality}</LocationText>
      <IconButton fill="transparent" icon="star" onClick={() => null} />
    </LocationRow>
    <TemperatureBlock>
      <TemperatureRow>
        <WeatherIcon name={weatherIcon} />
        <span>{getNumberWithSign(temperature)}°</span>
      </TemperatureRow>
      <Facts>
        <Condition>{condition}</Condition>
        <span>Ощущается как {getNumberWithSign(feel)}°</span>
      </Facts>
    </TemperatureBlock>
  </div>
)

PureWeatherBlock.propTypes = {
  locality: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  feel: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    locality: state.forecast.geo_object.locality.name,
    weatherIcon: state.forecast.fact.condition,
    temperature: state.forecast.fact.temp,
    condition: state.forecast.fact.condition,
    feel: state.forecast.fact.feels_like,
  }
}

export const WeatherBlock = connect(mapStateToProps)(PureWeatherBlock)
