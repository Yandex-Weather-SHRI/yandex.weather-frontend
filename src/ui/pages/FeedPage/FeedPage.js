import R from 'ramda'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getFeed } from 'redux/feed/actions'
import {
  PageTitle,
  PageContent as PageContentBase,
  PageLoader,
  AppBar,
  FeedFiltersList,
  FeedCardContainer,
} from 'ui/organisms'
import { IconButton, HintCard } from 'ui/molecules'
import { getFeedByFilters, getGroupedFeedListByCateogry, sortByStatus } from 'redux/feed/selectors'
import { setFeedFilter, getAvailableFilters } from 'redux/filters/actions'
import { routeNames } from 'utils/routeNames'


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
      PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
        })
      )
    ).isRequired,
    filtersList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getFeed: PropTypes.func.isRequired,
    setFeedFilter: PropTypes.func.isRequired,
    getAvailableFilters: PropTypes.func.isRequired,
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

  render() {
    const { title, fetching, feedList, filtersList } = this.props

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
            <HintCard
              title='Хотите больше советов?'
              text='Вы можете выбрать в настройках другие тематики'
              buttonText='НАСТРОЙКИ'
              onCloseClick={() => {}}
              onButtonClick={() => this.props.history.replace('/settings')}
            />
            {feedList.map((cardsList, key) => (
              <FeedCardContainer {...{ cardsList, key }} />
            ))}
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
      sortByStatus,
      getGroupedFeedListByCateogry,
      getFeedByFilters
    )(state.feed.list, state.filters),
    filtersList: state.filters,
  }
}

const mapDispatchToProps = {
  getFeed,
  setFeedFilter,
  getAvailableFilters,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
