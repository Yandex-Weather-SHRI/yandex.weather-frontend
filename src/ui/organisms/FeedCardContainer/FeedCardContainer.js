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
  ${p => getCategoryGroupStyle(p.categoryGroup)}
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
    openModal: PropTypes.func.isRequired,
    settingsSchema: PropTypes.shape({}).isRequired,
  }

  state = {
    currentCard: 0,
  }

  onChangeCard = currentCard => () => {
    this.setState({ currentCard })
  }

  onOptionsClick = card => () => {
    this.props.openModal(modals.cardOptions, { card })
  }

  onShareClick = card => () => {
    this.props.openModal(modals.shareCard, { card })
  }

  render() {
    const { currentCard } = this.state
    const { cardsList, settingsSchema } = this.props
    const card = cardsList[currentCard]
    const { categoryGroup, category } = card
    const { title: groupTitle, categories } = settingsSchema[categoryGroup]
    const categoryTitle = categories[category]

    return (
      <Container {...{ categoryGroup }}>
        <FeedCard
          {...card}
          {...{ groupTitle, categoryTitle }}
          onOptionsClick={this.onOptionsClick(card)}
          onShareClick={this.onShareClick(card)}
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

function mapStateToProps(state) {
  return {
    settingsSchema: state.user.settings.schema,
  }
}

const mapDispatchToProps = {
  openModal,
}

export const FeedCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedCardContainerInner)
