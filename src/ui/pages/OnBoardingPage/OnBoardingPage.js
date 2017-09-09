import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

import { routeNames } from 'utils/routeNames'
import { request } from 'utils/fetchHelper'
import { RoundedButton as Button } from 'ui/atoms'
import { PageTitle, PageLoader, FeedCardBoard, PageContent, AppBar } from 'ui/organisms'
import { IconButton } from 'ui/molecules'
import { requestLogin } from 'redux/user/actions'


const Content = PageContent.extend`
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px;
  padding-bottom: 29px;
`

const CenteredContent = Content.extend`
  justify-content: center;
  padding: 32px;
`

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`

const AdviceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.span`
  margin-bottom: 40px;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.87);
`

const SkipButon = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
`

const PaginationText = styled.span`
  margin-top: 22px;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
`

const RoundedButton = Button.extend`
  min-width: 100px;
  height: 48px;
  border-radius: 24px;
  position: relative;
  z-index: 1;
  font-size: 1.4rem;
  font-weight: 100;
  color: #fff;
  background-image: linear-gradient(296deg, #ed515f, #ff6f33);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04);
  margin-right: 56px;
  
  & > span {
    width: 100%
  }
  
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
    title: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    title: 'Выбор советов',
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
    const { title } = this.props

    if (!defaultSettings || !partialSettings) {
      return (
        <PageContent>
          <PageLoader />
        </PageContent>
      )
    }

    const { group, name } = partialSettings[currentCardIndex]
    const currentCard = onBoardingCards[name]
    const status = currentCard.code.split(/_/)[1]
    const { groupTitle, categoryTitle } = this.getCurrentTitles()

    return (
      <PageTitle {...{ title }}>
        <PageContent withFixedBar>
          <AppBar
            title=""
            elementLeft={
              <Link to={routeNames.index}>
                <IconButton icon="arrow-left" size="24" />
              </Link>
            }
            elementRight={
              <SkipButon onClick={this.handleSubmitOnboarding()}>УЖЕ ПРОХОДИЛ</SkipButon>
            }
          />
          {completed ? (
            <CenteredContent>
              <Text>Для того, чтобы сохранить выбранные советы, войдите в аккаунт</Text>
              <RoundedButton onClick={this.handleSubmitOnboarding(defaultSettings, partialSettings)}>
                <span>Войти</span>
              </RoundedButton>
            </CenteredContent>
          ) : (
            <Content>
              <Header>Интересны ли вам такие советы?</Header>
              <AdviceContainer>
                <FeedCardBoard
                  categoryGroup={group}
                  groupTitle={groupTitle}
                  category={name}
                  categoryTitle={categoryTitle}
                  text={currentCard.text}
                  status={status}
                />
                <PaginationText>{currentCardIndex + 1} / {partialSettings.length}</PaginationText>
              </AdviceContainer>
              <div>
                <RoundedButton
                  inverse
                  onClick={this.onChoiceHandler(false)}
                >
                  <span>Нет</span>
                </RoundedButton>
                <RoundedButton
                  onClick={this.onChoiceHandler(true)}
                >
                  <span>Да</span>
                </RoundedButton>
              </div>
            </Content>
          )}
        </PageContent>
      </PageTitle>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.user.oAuthToken),
})

export const OnBoardingPage = connect(mapStateToProps)(OnBoardingPageContainer)
