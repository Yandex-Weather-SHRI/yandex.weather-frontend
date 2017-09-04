import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { SimpleModal as BaseSimpleModal } from './base/SimpleModal'
import { IconWithText as IconWithTextBase } from '../atoms/IconWithText/IconWithText'
import { closeModal } from '../../redux/modal/actions'
import { ModalMessage } from '../atoms/ModalMessage/ModalMessage'


const SimpleModal = styled(BaseSimpleModal)`
  padding: 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
`

const IconWithText = styled(IconWithTextBase)`
  cursor: pointer;
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
    text: 'Неправильный совет',
    id: optionIds.badFeedback,
  },
  {
    iconName: 'no-eye',
    text: 'Не показывать больше этот совет',
    id: optionIds.dismiss,
  },
]

const optionsWithThankPage = [
  optionIds.goodFeedback,
  optionIds.badFeedback,
]

class CardOptionsModalInner extends React.Component {
  state = {
    showThanksBlock: false,
  }

  handleOptionClick = (option) => {
    console.log(option.text, this.props.meta) // todo backend

    if (optionsWithThankPage.includes(option.id)) {
      this.setState({ showThanksBlock: true })
      return
    }
    this.props.closeModal()
  }

  render() {
    return (
      <SimpleModal>
        {this.state.showThanksBlock
          ? <ModalMessage
            title="Спасибо"
            content="Ваш отзыв передан в Яндекс. Благодаря им мы делаем советы лучше"
          />
          : OPTIONS.map(option =>
            <IconWithText
              {...option}
              onClick={() => this.handleOptionClick(option)}
              key={option.id}
              itemOffsetTop="22px"
              iconOffset="16px"
              textStyles="font-size: 16px; font-weight: 400; line-height: 1.2;"
            />
          )
        }
      </SimpleModal>
    )
  }
}

CardOptionsModalInner.propTypes = {
  meta: PropTypes.shape({}).isRequired,
  closeModal: PropTypes.func.isRequired,
}

export const CardOptionsModal = connect(null, { closeModal })(CardOptionsModalInner)
