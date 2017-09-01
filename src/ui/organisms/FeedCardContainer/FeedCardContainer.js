import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FeedCard } from 'ui/organisms'
import { categoryGroup as categoryGroupDict } from 'constants/categoryGroup'


const DEFAULT_CARD_GRADIENT = 'linear-gradient(170deg, #30cfd0, #330867)'

const cardGradient = {
  [categoryGroupDict.meteoaddicted]: DEFAULT_CARD_GRADIENT,
}

const Container = styled.div`
  background-image: ${({ categoryGroup }) => cardGradient[categoryGroup]};
  border-radius: 4px;
  box-shadow:
    0 2px 10px 0 rgba(50, 71, 136, 0.12),
    0 2px 17px 0 rgba(49, 135, 170, 0.42);
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
          <div>
            <button onClick={this.onChangeCard(0)}>Сегодня</button>
            <button onClick={this.onChangeCard(1)}>пн</button>
          </div>
        )}
      </Container>
    )
  }
}
