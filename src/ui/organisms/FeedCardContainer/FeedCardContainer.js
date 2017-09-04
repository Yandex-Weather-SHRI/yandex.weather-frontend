import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FeedCard } from 'ui/organisms'
import { TabBar } from 'ui/molecules'
import { categoryGroup as categoryGroupDict } from 'constants/categoryGroup'
import { connect } from 'react-redux'
import { openModal } from '../../../redux/modal/actions'
import { modals } from '../../../constants/modals'


const DEFAULT_CARD_GRADIENT = 'linear-gradient(to bottom, #309bb4, #32689a)'

const cardGradient = {
  [categoryGroupDict.health]: DEFAULT_CARD_GRADIENT,
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

export class FeedCardContainerInner extends Component {
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
        <FeedCard
          {...card}
          onOptionsClick={() => this.props.openModal(modals.cardOptions, { cardId: card.id })}
          onShareClick={() => this.props.openModal(modals.shareCard, { card })}
        />
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


FeedCardContainerInner.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export const FeedCardContainer = connect(null, { openModal })(FeedCardContainerInner)
