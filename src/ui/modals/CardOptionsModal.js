import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { ModalMessage, IconWithText as IconWithTextBase } from 'ui/atoms'
import { getAvailableFilters } from 'redux/filters/actions'
import { updateOneUserSetting } from 'redux/user/actions'
import { closeModal } from 'redux/modal/actions'
import { getFeed } from 'redux/feed/actions'

import { SimpleModal as BaseSimpleModal } from './base/SimpleModal'


const SimpleModal = styled(BaseSimpleModal)`
  padding: 12px 0;
  width: 280px;
  display: flex;
  flex-direction: column;
`

const IconWithText = styled(IconWithTextBase)`
  height: 48px;
  padding: 0 24px;
  transition: opacity 150ms ease-in-out;
  user-select: none;

  &:active {
    opacity: 0.5;
  }
`

const optionIds = {
  goodFeedback: 'goodFeedback',
  badFeedback: 'badFeedback',
  dismiss: 'dismiss',
}

const OPTIONS = [
  {
    iconName: 'check',
    text: 'Полезный совет',
    id: optionIds.goodFeedback,
  },
  {
    iconName: 'cancel',
    text: 'Неактуальный совет',
    id: optionIds.badFeedback,
  },
  {
    iconName: 'no-eye',
    text: 'Скрыть этот совет',
    id: optionIds.dismiss,
  },
]

const optionsWithThankPage = [
  optionIds.goodFeedback,
  optionIds.badFeedback,
]

class CardOptionsModalContainer extends Component {
  static propTypes = {
    updateOneUserSetting: PropTypes.func.isRequired,
    getAvailableFilters: PropTypes.func.isRequired,
    getFeed: PropTypes.func.isRequired,
    meta: PropTypes.shape({}).isRequired,
    closeModal: PropTypes.func.isRequired,
  }

  state = {
    showThanksBlock: false,
  }

  componentDidUpdate() {
    if (this.state.showThanksBlock) {
      this.closeTimer = setTimeout(this.props.closeModal, 2000)
    }
  }

  componentWillUnmount() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
    }
  }

  handleOptionClick = option => () => {
    if (optionsWithThankPage.includes(option.id)) {
      this.setState({ showThanksBlock: true })
      return
    }

    if (option.id === optionIds.dismiss) {
      const { meta: { card: { category } } } = this.props
      this.props.updateOneUserSetting(category, false)
        .then(() => {
          this.props.getAvailableFilters()
          this.props.getFeed()
        })
    }

    this.props.closeModal()
  }

  render() {
    return (
      <SimpleModal>
        {this.state.showThanksBlock ? (
          <ModalMessage
            title="Спасибо"
            content="Ваш отзыв передан в Яндекс. Благодаря им мы делаем советы лучше"
          />
        ) : OPTIONS.map(option =>
          <IconWithText
            {...option}
            onClick={this.handleOptionClick(option)}
            key={option.id}
            iconOffset="16px"
            textStyles="font-size: 1.6rem; font-weight: 400; line-height: 1.25;"
          />
        )}
      </SimpleModal>
    )
  }
}

export const CardOptionsModal = connect(null, {
  closeModal,
  updateOneUserSetting,
  getFeed,
  getAvailableFilters,
})(CardOptionsModalContainer)
