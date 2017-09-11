import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { FeedCard } from 'ui/organisms'
import { TabBar } from 'ui/molecules'
import { openModal } from 'redux/modal/actions'
import { modals } from 'constants/modals'
import { getNameOfSomeNextDay } from '../../../utils/days'
import { statuses } from '../../../constants/statuses'


function getTabs(cardsList) {
  return cardsList.reduce((acc, item, index) => {
    if (index === 0) return acc

    return [...acc, {
      id: index,
      title: getNameOfSomeNextDay(index),
      alert: item.status === statuses.bad,
    }]
  }, [{ id: 0, title: 'Сегодня', alert: false }])
}

const Container = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.02) 99%);
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
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
    const { categoryGroup, category, code } = card
    const { title: groupTitle, categories } = settingsSchema[categoryGroup]
    const categoryTitle = categories[category]
    const status = code.split(/_/)[1]

    return (
      <Container {...{ categoryGroup }}>
        <FeedCard
          {...card}
          {...{ groupTitle, categoryTitle, status }}
          onOptionsClick={this.onOptionsClick(card)}
          onShareClick={this.onShareClick(card)}
        />
        {cardsList.length > 1 && (
          <TabBar
            tabs={getTabs(cardsList)}
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
