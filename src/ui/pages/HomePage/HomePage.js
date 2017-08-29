import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { WeatherBackground, WeatherBlock, Slider } from 'ui/organisms'
import { WeatherConditions, NavigationBar, SliderCard } from 'ui/molecules'
import { fetchWeather } from 'redux/forecast/actions'
import { routeNames } from 'utils/routeNames'


const Container = styled.div`
  background-color: #f5f3f2;
`

class Page extends React.Component {
  static propTypes = {
    fetchWeather: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchWeather()
  }

  render() {
    return (
      <Container>
        <WeatherBackground condition="good">
          <NavigationBar />
          <WeatherBlock />
        </WeatherBackground>
        <WeatherConditions />
        <Slider>
          <SliderCard
            linkTo={routeNames.index}
            bg="linear-gradient(to bottom,#366ca7,#4077b2)"
            color="#fff"
            buttonText="Показать на карте"
          >В центре дождь в ближайшие два часа не прекратится</SliderCard>
          <SliderCard
            linkTo={routeNames.onboarding}
            bg="linear-gradient(to bottom, #9cddff, #4baffd 52%, #498ffa)"
            color="#fff"
            buttonText="Другие советы"
          >Сильные магнитные буруи</SliderCard>
        </Slider>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  fetchWeather,
}

export const HomePage = connect(null, mapDispatchToProps)(Page)
