import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getFeed } from 'redux/feed/actions'
import { PageContent, PageLoader, AppBar, FeedFiltersList, FeedCardContainer } from 'ui/organisms'
import { IconButton } from 'ui/molecules'
import { getFeedByFilters } from 'redux/feed/selectors'
import { setFeedFilter, getAvailableFilters } from 'redux/filters/actions'
import { routeNames } from 'utils/routeNames'


const FeedList = styled.div`
  padding: 0 8px;
  margin-bottom: 16px;
`

class FeedPageContainer extends Component {
  static propTypes = {
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

  componentDidMount() {
    this.props.getAvailableFilters()
    this.props.getFeed()
  }

  setFeedFilter = (name, active) => () => {
    this.props.setFeedFilter({ name, active })
  }

  render() {
    const { fetching, feedList, filtersList } = this.props

    return (
      <PageContent withFixedBar>
        <AppBar
          title="Советы"
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
        {feedList.length > 0 && !fetching && (
          <FeedFiltersList
            list={filtersList}
            setFeedFilter={this.setFeedFilter}
          />
        )}
        {fetching ? (
          <PageLoader />
        ) : (
          <FeedList>
            {feedList.map((cardsList, key) => (
              <FeedCardContainer {...{ cardsList, key }} />
            ))}
          </FeedList>
        )}
      </PageContent>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.feed.fetching,
    feedList: getFeedByFilters(state),
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
