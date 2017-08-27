import React from 'react'
import styled from 'styled-components'

import { WeatherBackground, WeatherBlock } from 'ui/organisms'
import { WeatherConditions, NavigationBar } from 'ui/molecules'


const Container = styled.div`
  background-color: #f5f3f2;
  height: 100vh;
`

export const HomePage = () => (
  <Container>
    <WeatherBackground condition="good">
      <NavigationBar />
      <WeatherBlock
        locationText="Погода в Москве"
        weatherIcon="bkn_d"
        temperature="+18"
        condition="Облачно с прояснениями"
        feel="Ощущается как +16°"
      />
    </WeatherBackground>
    <WeatherConditions
      wind="10 м/с, СЗ"
      humidity="60%"
      pressure={<span>756 <span style={{ fontSize: 10 }}>мм рт. ст.</span></span>}
      waterTemp="10°"
    />
  </Container>
)
