import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FeedCard } from 'ui/organisms'
import { TabBar } from 'ui/molecules'
import { categoryGroup as categoryGroupDict } from 'constants/categoryGroup'


const DEFAULT_CARD_GRADIENT = 'linear-gradient(to bottom, #309bb4, #32689a)'

const cardGradient = {
  [categoryGroupDict.meteoaddicted]: DEFAULT_CARD_GRADIENT,
}

const mockTabs = [
  {
    id: 0,
    title: 'Сегодня',
  },
  {
    id: 1,
    title: 'ПН',
  },
]

const Container = styled.div`
  background-image: ${({ categoryGroup }) => cardGradient[categoryGroup]};
  border-radius: 4px;
  box-shadow:
    0 2px 6px 0 rgba(50, 71, 136, 0.12),
    0 2px 16px 0 rgba(49, 135, 170, 0.42);
  overflow: hidden;

  & + & {
    margin-top: 16px;
  }
`

export class FeedCardContainer extends Component {
  static propTypes = {
    cardsList: PropTypes.arrayOf(
      PropTypes.shape()
    ).isRequired,
  }

  state = {
    currentCard: 0,
  }

  onChangeCard = currentCard => () => {
    this.setState({ currentCard })
  }

  render() {
    const { currentCard } = this.state
    const { cardsList } = this.props
    const card = cardsList[currentCard]

    return (
      <Container categoryGroup={card.categoryGroup}>
        <FeedCard {...card} />
        {cardsList.length > 1 && (
          <TabBar
            tabs={mockTabs}
            onTabSelect={this.onChangeCard}
            currentTab={currentCard}
          />
        )}
      </Container>
    )
  }
}
