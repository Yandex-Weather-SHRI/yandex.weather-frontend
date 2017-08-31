import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getFeed } from 'redux/feed/actions'
import { FeedCard } from 'ui/organisms/FeedCard/FeedCard'

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
`

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
      <Container>
        {list.map(item => (
          <div key={item.id}>
            {item.text}
          </div>
        ))}
        {MOCK_CARDS.map(card => <FeedCard {...card} key={card.id} />)}
      </Container>
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
