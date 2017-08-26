import React from 'react'
import styled from 'styled-components'

import { WeatherBackground } from 'ui/organisms'


const Container = styled.div`
  background-color: #f5f3f2;
  height: 100vh;
`

export const HomePage = () => (
  <Container>
    <WeatherBackground condition="good" />
  </Container>
)
