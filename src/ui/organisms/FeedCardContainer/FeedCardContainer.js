import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { FeedCard } from 'ui/organisms'
import { TabBar, QuestionCard } from 'ui/molecules'
import { openModal } from 'redux/modal/actions'
import { modals } from 'constants/modals'
import { removeFeedItem, addSuggestionFeedCard } from 'redux/feed/actions'
import { getTabs } from 'utils/tabs'


const Container = styled.div`
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const CardContainer = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.02) 99%);
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding: 1px;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    background-color: #fff;
    border-radius: inherit;
  }
`

export class FeedCardContainerInner extends Component {
  static propTypes = {
    cardsList: PropTypes.arrayOf(
      PropTypes.shape()
    ).isRequired,
    openModal: PropTypes.func.isRequired,
    settingsSchema: PropTypes.shape({}).isRequired,
    isQuestionCard: PropTypes.bool,
    removeFeedItem: PropTypes.func.isRequired,
    addSuggestionFeedCard: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isQuestionCard: false,
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

  onDoneClick = (id, category) => () => {
    this.props.addSuggestionFeedCard(id, category)
  }

  onCancelClick = id => () => {
    this.props.removeFeedItem(id)
  }

  render() {
    const { currentCard } = this.state
    const { cardsList, settingsSchema, isQuestionCard } = this.props
    const card = cardsList[currentCard]
    const { id, categoryGroup, category, status } = card
    const { title: groupTitle, categories } = settingsSchema[categoryGroup]
    const categoryTitle = categories[category]

    return (
      <Container>
        {isQuestionCard && (
          <QuestionCard
            title="Интересны ли вам советы про сердце?"
            category={category}
            onDoneClick={this.onDoneClick(id, category)}
            onCancelClick={this.onCancelClick(id)}
          />
        )}
        <CardContainer {...{ categoryGroup }}>
          <FeedCard
            {...card}
            {...{ groupTitle, categoryTitle, status }}
            onOptionsClick={this.onOptionsClick(card)}
            onShareClick={this.onShareClick(card)}
            isOnBoarding={isQuestionCard}
          />
          {cardsList.length > 1 && (
            <TabBar
              tabs={getTabs(cardsList)}
              onTabSelect={this.onChangeCard}
              currentTab={currentCard}
            />
          )}
        </CardContainer>
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
  removeFeedItem,
  addSuggestionFeedCard,
}

export const FeedCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedCardContainerInner)
