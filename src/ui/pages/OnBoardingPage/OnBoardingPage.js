import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

import { routeNames } from 'utils/routeNames'
import { request } from 'utils/fetchHelper'
import { Icon, RoundedButton as Button } from 'ui/atoms'
import { getCategoryGroupStyle } from 'styles/utils'
import { PageLoader, FeedCardBoard, PageContent, PaginationBullets } from 'ui/organisms'
import { requestLogin } from 'redux/user/actions'


const Container = PageContent.extend`
  align-items: center;
  padding: 16px;
`

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  margin: 32px 0;
`

const RoundedButton = Button.extend`
  min-width: 88px;
  height: 48px;
  border-radius: 24px;
  position: relative;
  z-index: 1;
  font-size: 1.4rem;
  font-weight: 100;
  ${p => getCategoryGroupStyle({ name: p.categoryGroup })}
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04);
  margin-right: 56px;
  
  &:last-of-type {
    margin-right: 0;
  }
 
  ${p => p.inverse && css`
    color: rgba(0, 0, 0, 0.87);
 
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      background-color: #fff;
      border-radius: inherit;
    }
  `}
`

const PaginationWrapper = styled.div`
  margin-top: 12px;
`

const ButtonIcon = styled(Icon)`
  margin-right: 8px;
`

const ButtonsRow = styled.div`
  margin-top: 16px;
`

const mergeSettings = (defaultSettings, partialSettings) =>
  defaultSettings.map((settingItem) => {
    const element = partialSettings.find(partialSettingItem =>
      partialSettingItem.group === settingItem.group && partialSettingItem.name === settingItem.name
    )

    return element ? { ...settingItem, enabled: element.enabled } : settingItem
  })


/* eslint-disable class-methods-use-this */
class OnBoardingPageContainer extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    currentCardIndex: 0,
    completed: false,
  }

  componentDidMount() {
    this.checkAuthentication().then(() => {
      this.fetchData()
    })
  }

  onChoiceHandler = liked => () => {
    this.updateSetting(liked)
    this.showNextCard()
  }

  getCurrentTitles() {
    const { schema, partialSettings, currentCardIndex } = this.state

    const { title: groupTitle, categories } = schema[partialSettings[currentCardIndex].group]
    const categoryTitle = categories[partialSettings[currentCardIndex].name]

    return { categoryTitle, groupTitle }
  }

  getCardsWithKeys(onBoardingCards) {
    return onBoardingCards.reduce((acc, item) => {
      const [category] = item.code.split(/_/)
      acc[category] = item
      return acc
    }, {})
  }

  getPartialSettings(defaultSettings, onBoardingCards) {
    return defaultSettings.filter(category => onBoardingCards[category.name])
  }

  handleSubmitOnboarding = (defaultSettings = [], partialSettings = []) => () => {
    requestLogin({
      categories: mergeSettings(defaultSettings, partialSettings),
      nextRoute: routeNames.feed,
    })
  }

  checkAuthentication() {
    return new Promise((resolve) => {
      if (this.props.isAuthenticated) {
        this.props.history.replace(routeNames.feed)
      }
      else {
        resolve()
      }
    })
  }

  async fetchData() {
    try {
      const [defaultSettings, onBoardingCardsArray, schema] = await Promise.all([
        request.get('/v1/settings/default'),
        request.get('/v1/settings/onboarding_cards'),
        request.get('/v1/settings/schema'),
      ])
      const onBoardingCards = this.getCardsWithKeys(onBoardingCardsArray)
      const partialSettings = this.getPartialSettings(defaultSettings, onBoardingCards)

      this.setState({ defaultSettings, onBoardingCards, partialSettings, schema })
    }
    catch (e) {
      // todo
    }
  }

  showNextCard() {
    const { currentCardIndex, partialSettings } = this.state

    if (currentCardIndex >= partialSettings.length - 1) {
      this.setState({ completed: true })
    }
    else {
      this.setState({ currentCardIndex: currentCardIndex + 1 })
    }
  }

  updateSetting(enabled) {
    const { currentCardIndex, partialSettings } = this.state

    if (partialSettings[currentCardIndex]) {
      const updatedPartialSettings = partialSettings.map((item, index) =>
        index === currentCardIndex ? { ...item, enabled } : item
      )

      this.setState({ partialSettings: updatedPartialSettings })
    }
  }

  render() {
    const { defaultSettings, currentCardIndex, completed, partialSettings, onBoardingCards } = this.state

    if (!defaultSettings || !partialSettings) {
      return (
        <Container>
          <PageLoader />
        </Container>
      )
    }

    const { group, name } = partialSettings[currentCardIndex]
    const currentCard = onBoardingCards[name]
    const { groupTitle, categoryTitle } = this.getCurrentTitles()

    return (
      <Container>
        <RoundedButton onClick={this.handleSubmitOnboarding()}>Пропустить</RoundedButton>
        <Header>Интересен ли вам совет?</Header>
        <FeedCardBoard
          categoryGroup={group}
          groupTitle={groupTitle}
          category={name}
          categoryTitle={categoryTitle}
          text={currentCard.text}
        />
        <PaginationWrapper>
          <PaginationBullets
            activeIndex={currentCardIndex}
            total={partialSettings.length}
          />
        </PaginationWrapper>
        {completed ? (
          <RoundedButton onClick={this.handleSubmitOnboarding(defaultSettings, partialSettings)}>
            Сохранить настройки
          </RoundedButton>
        ) : (
          <ButtonsRow>
            <RoundedButton
              categoryGroup={group}
              inverse
              onClick={this.onChoiceHandler(false)}
            >
              <ButtonIcon name="cancel" size={16} />
              Нет
            </RoundedButton>
            <RoundedButton
              categoryGroup={group}
              onClick={this.onChoiceHandler(true)}
            >
              <ButtonIcon name="check" fill="#fff" size={16} />
              Да
            </RoundedButton>
          </ButtonsRow>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.user.oAuthToken),
})

export const OnBoardingPage = connect(mapStateToProps)(OnBoardingPageContainer)
