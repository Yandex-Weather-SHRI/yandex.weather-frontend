import React from 'react'
import styled from 'styled-components'

import { WeatherBackground } from 'ui/organisms'
import { WeatherConditions } from 'ui/molecules'


const Container = styled.div`
  background-color: #f5f3f2;
  height: 100vh;
`

export const HomePage = () => (
  <Container>
    <WeatherBackground condition="good" />
    <WeatherConditions
      wind="10 м/с, СЗ"
      humidity="60%"
      pressure={<span>756 <span style={{ fontSize: 10 }}>мм рт. ст.</span></span>}
      waterTemp="10°"
    />
  </Container>
)
