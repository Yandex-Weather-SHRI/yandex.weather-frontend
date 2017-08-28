import React from 'react'
import styled from 'styled-components'

import { WeatherBackground, Slider } from 'ui/organisms'
import { WeatherConditions, SliderCard } from 'ui/molecules'


const Container = styled.div`
  background-color: #f5f3f2;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
    <Slider>
      <SliderCard
        bg="linear-gradient(to bottom,#366ca7,#4077b2)"
        color="#fff"
        buttonText="Показать на карте"
      >В центре дождь в ближайшие два часа не прекратится</SliderCard>
      <SliderCard
        bg="linear-gradient(to bottom, #9cddff, #4baffd 52%, #498ffa)"
        color="#fff"
        buttonText="Другие советы"
      >Сильные магнитные буруи</SliderCard>
    </Slider>
  </Container>
)
