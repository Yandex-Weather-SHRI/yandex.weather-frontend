import R from 'ramda'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getFeed, closeHint } from 'redux/feed/actions'
import {
  PageTitle,
  PageContent as PageContentBase,
  PageLoader,
  AppBar,
  FeedFiltersList,
  FeedCardContainer,
} from 'ui/organisms'
import { IconButton, HintCard } from 'ui/molecules'
import { getFeedByFilters, getGroupedFeedListByCategory, sortByStatus } from 'redux/feed/selectors'
import { setFeedFilter, getAvailableFilters } from 'redux/filters/actions'
import { routeNames } from 'utils/routeNames'
import { feedItemType } from 'constants/feedItemType'
import { addHint } from 'redux/feed/enhancers'
import { hints } from 'constants/hints'


const PageContent = PageContentBase.extend`
  background-color: #f7f7f7;
`

const FeedList = styled.div`
  padding: 0 8px;
  margin-bottom: 16px;
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
  }

  setFeedFilter = (name, active) => () => {
    this.props.setFeedFilter({ name, active })
  }

  renderFeedItem(item) {
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
          title='Хотите больше советов?'
          text='Вы можете выбрать в настройках другие тематики'
          buttonText='НАСТРОЙКИ'
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

    return (
      <PageTitle {...{ title }}>
        <PageContent withFixedBar>
          <AppBar
            {...{ title }}
            elementLeft={
              <Link to={routeNames.index}>
                <IconButton icon="arrow-left" size="24" />
              </Link>
            }
            elementRight={
              <Link to={routeNames.settings}>
                <IconButton icon="settings" size="24" />
              </Link>
            }
          />
          {fetching && (
            <PageLoader />
          )}
          {feedList.length > 0 && (
            <FeedFiltersList
              list={filtersList}
              setFeedFilter={this.setFeedFilter}
            />
          )}
          <FeedList>
            {feedList.map(this.renderFeedItem)}
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
  closeHint,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
