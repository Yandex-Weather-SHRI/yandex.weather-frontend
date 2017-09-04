import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { FeedCard } from 'ui/organisms'
import { TabBar } from 'ui/molecules'
import { getCategoryGroupStyle } from 'styles/utils'
import { openModal } from '../../../redux/modal/actions'
import { modals } from '../../../constants/modals'


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
  ${p => getCategoryGroupStyle({ name: p.categoryGroup })}
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
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
          onOptionsClick={() => this.props.openModal(modals.cardOptions, { card })}
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
