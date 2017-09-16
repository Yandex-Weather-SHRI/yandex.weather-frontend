import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PageContent, PageLoader, WeatherBackground, WeatherBlock, Slider } from 'ui/organisms'
import { WeatherConditions, NavigationBar, SliderCard } from 'ui/molecules'
import { fetchWeather } from 'redux/forecast/actions'
import { routeNames } from 'utils/routeNames'
import { ScrollContainer } from 'ui/atoms'


const Container = PageContent.extend`
  background-color: #f5f3f2;
`

/* eslint-disable global-require, import/no-unresolved */
/* eslint-disable import/order */
const SliderStubImage = styled.div`
  background-image: url(${require('assets/images/mock/days.png')});
  background-position: center;
  min-height: 88px;
  height: auto;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`

const GraphStubImage = styled.div`
  background-image: url(${require('assets/images/mock/graph.png')});
  height: 166px;
  width: 632px;
  background-size: cover;
  background-repeat: no-repeat;
`
/* eslint-enable import/order */
/* eslint-enable global-require */

const GraphStubImageWrapper = ScrollContainer.extend`
  display: block;
  height: auto;
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
          <SliderCard linkTo="" bg="#fff" isStaticImageCard>
            <SliderStubImage />
          </SliderCard>
        </Slider>
        <GraphStubImageWrapper>
          <GraphStubImage />
        </GraphStubImageWrapper>
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
