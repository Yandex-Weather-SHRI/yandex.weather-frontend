import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getFeed } from 'redux/feed/actions'
import { FeedCard } from 'ui/organisms/FeedCard/FeedCard'
import { getFeedByFilters } from 'redux/feed/selectors'
import { setFeedFilter } from 'redux/filters/actions'
import { FeedFiltersList } from 'ui/organisms'

const MOCK_CARDS = [
  {
    categoryGroupName: 'Метеозависимость',
    categoryName: 'Сердце',
    text: 'Людям с заболеваниями сердца желательно уменьшить физическую активность',
    onShareClick: () => console.log('share!'),
    onOptionsClick: () => console.log('options!'),
    id: 1,
  },
  {
    categoryGroupName: 'Метеозависимость',
    categoryName: 'Астма',
    text: 'Для людей с заболеванием астмы рекомендуем выбрать спокойную деятельность',
    onShareClick: () => console.log('share!'),
    onOptionsClick: () => console.log('options!'),
    id: 2,
  },
]

const Container = styled.div`
  padding: 16px 8px 0;
  flex: 1;
`

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
      <Container>
        <FeedFiltersList
          list={filters}
          setFeedFilter={this.setFeedFilter}
        />
        {MOCK_CARDS.map(card => <FeedCard {...card} key={card.id} />)}
      </Container>
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
