import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { PageContent, PageLoader, WeatherBackground, WeatherBlock, Slider } from 'ui/organisms'
import { WeatherConditions, NavigationBar, SliderCard } from 'ui/molecules'
import { fetchWeather } from 'redux/forecast/actions'
import { routeNames } from 'utils/routeNames'


const Container = PageContent.extend`
  background-color: #f5f3f2;
`

class HomePageContainer extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    fetchWeather: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchWeather()
  }

  render() {
    const { fetching } = this.props

    if (fetching) {
      return (
        <PageLoader />
      )
    }

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
          >
            В центре дождь в ближайшие два часа не прекратится
          </SliderCard>
          <SliderCard
            linkTo={routeNames.onboarding}
            bg="#fff"
            buttonText="БОЛЬШЕ СОВЕТОВ"
          >
            Будьте осторожны!<br />
            Сегодня <strong>сильная</strong> геомагнитная буря
          </SliderCard>
        </Slider>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.forecast.fetching,
  }
}

const mapDispatchToProps = {
  fetchWeather,
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer)
