import React from 'react'
import styled from 'styled-components'

import { IconButton } from 'ui/molecules'
import { Icon } from 'ui/atoms'


const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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

const ConditionsRow = styled.div`
  font-size: 1.4rem;
  line-height: 1.43;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WeatherBlock = (...props) => (
  <div>
    <LocationRow>
      <IconButton fill="#fff" stroke="#fff" icon="geolocation" onClick={() => console.log('i`m here!')} />
      <LocationText>Погода в Москве</LocationText>
      <IconButton fill="transparent" stroke="#fff" icon="star" onClick={() => console.log('i`m here!')} />
    </LocationRow>
    <TemperatureBlock>
      <TemperatureRow>
        <WeatherIcon name="bkn_d" />
        <span>+18°</span>
      </TemperatureRow>
      <ConditionsRow>
        <span>Облачно с прояснениями</span>
        <span>Ощущается как +14°</span>
      </ConditionsRow>
    </TemperatureBlock>
  </div>
)

export default WeatherBlock
