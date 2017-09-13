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
    isAuthenticated: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchWeather()
  }

  render() {
    const { fetching, isAuthenticated } = this.props

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
            linkTo={routeNames.onboarding}
            bg="#fff"
            buttonText={isAuthenticated ? 'ДРУГИЕ СОВЕТЫ' : 'БОЛЬШЕ СОВЕТОВ'}
          >
            Будьте осторожны!<br />
            Сегодня <strong>сильная</strong> геомагнитная буря
          </SliderCard>
          <SliderCard
            linkTo=""
            bg="#fff"
            buttonText="ПОКАЗАТЬ НА КАРТЕ"
          >
            В течение двух часов дождя не ожидается
          </SliderCard>
        </Slider>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.forecast.fetching,
    isAuthenticated: Boolean(state.user.oAuthToken),
  }
}

const mapDispatchToProps = {
  fetchWeather,
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer)
