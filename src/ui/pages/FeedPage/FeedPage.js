import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getFeed } from 'redux/feed/actions'
import { AppBar } from 'ui/organisms/AppBar/AppBar'
import { IconButton } from 'ui/molecules/IconButton/IconButton'


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
      <div style={{ width: '100%' }}>
        <AppBar
          title="Советы"
          elementLeft={
            <IconButton icon="search" size="24" />
          }
          elementRight={
            <IconButton icon="star" size="24" />
          }
        />
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
