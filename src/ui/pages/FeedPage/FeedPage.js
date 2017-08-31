import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getFeed } from 'redux/feed/actions'
import { getFeedByFilters } from 'redux/feed/selectors'
import { setFeedFilter } from 'redux/filters/actions'
import { FeedFiltersList } from 'ui/organisms'


class FeedPageContainer extends Component {
  static propTypes = {
    feed: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getFeed: PropTypes.func.isRequired,
    setFeedFilter: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getFeed()
  }

  setFeedFilter = (name, active) => () => {
    this.props.setFeedFilter({ name, active })
  }

  render() {
    const { feed, filters } = this.props

    return (
      <div>
        <FeedFiltersList
          list={filters}
          setFeedFilter={this.setFeedFilter}
        />
        {feed.map(item => (
          <div key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    feed: getFeedByFilters(state),
    filters: state.filters,
  }
}

const mapDispatchToProps = {
  getFeed,
  setFeedFilter,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
