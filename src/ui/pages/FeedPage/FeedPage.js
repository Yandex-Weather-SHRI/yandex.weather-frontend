import R from 'ramda'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import { getFeed, closeHint } from 'redux/feed/actions'
import {
  PageTitle,
  PageContent as PageContentBase,
  PageLoader,
  AppBar,
  FeedFiltersList,
  FeedCardContainer,
} from 'ui/organisms'
import { HintCard, AppBarButton, NotFoundPlaceholder } from 'ui/molecules'
import { getFeedByFilters, getGroupedFeedListByCategщry, sortByStatus } from 'redux/feed/selectors'
import { setFeedFilter, getAvailableFilters } from 'redux/filters/actions'
import { routeNames } from 'utils/routeNames'
import { openModal } from 'redux/modal/actions'
import { modals } from 'constants/modals'
import { feedItemType } from 'constants/feedItemType'
import { addHint } from 'redux/feed/enhancers'
import { hints } from 'constants/hints'
import { hintUtil } from 'utils/hintUtil'
import { FIRST_FEED_KEY, SHARE_KEY } from '../../../utils/localStorageUtil'


const PageContent = PageContentBase.extend`
  background-color: #f7f7f7;
`

const FeedList = styled.div`
  padding: 0 8px;
  margin: 8px 0;
  ${p => p.centered && css`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  `}
`

class FeedPageContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    feedList: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
        PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
          })
        ),
      ])
    ).isRequired,
    filtersList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getFeed: PropTypes.func.isRequired,
    setFeedFilter: PropTypes.func.isRequired,
    getAvailableFilters: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    closeHint: PropTypes.func.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  }

  static defaultProps = {
    title: 'Советы',
  }

  componentDidMount() {
    this.props.getAvailableFilters()
    this.props.getFeed()
    this.checkFirstFeedSeen()
  }

  componentDidUpdate() {
    if (this.shouldShowShareHint && !this.props.fetching && this.props.feedList.length) {
      this.shouldShowShareHint = false
      this.showShareHint()
    }
  }

  setFeedFilter = (name, active) => () => {
    this.props.setFeedFilter({ name, active })
  }

  showShareHint() {
    const shareButton = document.querySelector('[data-hint="share"]')
    if (shareButton) {
      const { top } = shareButton.getBoundingClientRect()
      this.props.openModal(modals.shareHint, { top, hintId: SHARE_KEY })
    }
  }

  checkFirstFeedSeen() {
    if (hintUtil.isSeen(FIRST_FEED_KEY)) {
      this.shouldShowShareHint = !hintUtil.isSeen(SHARE_KEY)
    }
    else {
      hintUtil.markSeen(FIRST_FEED_KEY)
    }
  }

  renderFeedItem = (item) => {
    const type = Array.isArray(item) ? item[0].type : item.type
    const key = Array.isArray(item) ? item[0].category : item.id

    switch (type) {
      case feedItemType.alert:
        return <FeedCardContainer key={key} cardsList={item} />

      case feedItemType.suggestedAlert:
        return <FeedCardContainer key={key} isQuestionCard cardsList={item} />

      case feedItemType.notice:
        return <HintCard
          key={key}
          title="Хотите больше советов?"
          text="Вы можете выбрать в настройках другие тематики"
          buttonText="Настройки"
          onCloseClick={() => this.props.closeHint(hints.moreAlertsFeedHint)}
          onButtonClick={() => this.props.history.replace('/settings')}
        />

      default:
        throw new Error(`Unexpected feedItemType=${type}`)
    }
  }

  render() {
    const { title, fetching, filtersList } = this.props
    const feedList = fetching ? [] : this.props.feedList
    const isEmptyList = feedList.length === 0

    return (
      <PageTitle {...{ title }}>
        <PageContent withFixedBar>
          <AppBar
            {...{ title }}
            elementLeft={
              <AppBarButton
                icon="arrow-left"
                iconSize={24}
                to={routeNames.index}
              />
            }
            elementRight={
              <AppBarButton
                icon="settings"
                iconSize={24}
                to={routeNames.settings}
              />
            }
          />
          {fetching && (
            <PageLoader />
          )}
          {feedList.length > 0 && filtersList.length > 1 && (
            <FeedFiltersList
              list={filtersList}
              setFeedFilter={this.setFeedFilter}
            />
          )}
          <FeedList centered={isEmptyList}>
            {!isEmptyList && (
              feedList.map(this.renderFeedItem)
            )}
            {isEmptyList && !fetching && (
              <NotFoundPlaceholder
                buttonText="Настройки"
                text="Не выбрано ни одного совета. Для того, чтобы добавить совет выберите его в настройках"
                onButtonClick={() => this.props.history.replace('/settings')}
              />
            )}
          </FeedList>
        </PageContent>
      </PageTitle>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.feed.fetching,
    feedList: R.compose(
      addHint,
      sortByStatus,
      getGroupedFeedListByCategory,
      getFeedByFilters
    )(state.feed.list, state.filters),
    filtersList: state.filters,
  }
}

const mapDispatchToProps = {
  getFeed,
  setFeedFilter,
  getAvailableFilters,
  openModal,
  closeHint,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
