import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getFeed } from 'redux/feed/actions'


class FeedPageContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    getFeed: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getFeed()
  }

  render() {
    const { list } = this.props

    return (
      <div>
        FeedsPage
        {list.map(item => (
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
    list: state.feed.list,
  }
}

const mapDispatchToProps = {
  getFeed,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
