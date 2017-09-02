import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { SimpleModal as BaseSimpleModal } from './base/SimpleModal'
import { IconWithText as IconWithTextBase } from '../atoms/IconWithText/IconWithText'
import { closeModal } from '../../redux/modal/actions'


const SimpleModal = styled(BaseSimpleModal)`
  padding: 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
`


const IconWithText = styled(IconWithTextBase)`
  cursor: pointer;
`

const OPTIONS = [
  {
    iconName: 'check',
    text: 'Полезный совет',
    id: 1,
  },
  {
    iconName: 'cancel',
    text: 'Неправильный совет',
    id: 2,
  },
  {
    iconName: 'no-eye',
    text: 'Не показывать больше этот совет',
    id: 3,
  },
]

export const CardOptionsModalInner = ({ meta, closeModal: closeModalAction }) =>
  <SimpleModal>
    {OPTIONS.map(option =>
      <IconWithText
        {...option}
        onClick={() => {
          console.log(option.text, meta)
          closeModalAction()
        }}
        key={option.id}
        itemOffsetTop="22px"
        iconOffset="16px"
        textStyles="font-size: 16px; font-weight: 400; line-height: 1.2;"
      />
    )}
  </SimpleModal>

CardOptionsModalInner.propTypes = {
  meta: PropTypes.shape({}).isRequired,
  closeModal: PropTypes.func.isRequired,
}

export const CardOptionsModal = connect(null, { closeModal })(CardOptionsModalInner)
