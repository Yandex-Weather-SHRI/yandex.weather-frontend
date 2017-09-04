import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ShareButtons, generateShareIcon } from 'react-share'

import { SimpleModal as BaseSimpleModal } from './base/SimpleModal'
import { ModalMessage } from '../atoms/ModalMessage/ModalMessage'
import { categoryGroupDisplayNames } from '../../constants/categoryGroup'


const {
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,
} = ShareButtons

const SOCIAL_BUTTONS = [
  {
    id: 'twitter',
    component: TwitterShareButton,
    icon: generateShareIcon('twitter'),
  },
  {
    id: 'vk',
    component: VKShareButton,
    icon: generateShareIcon('vk'),
  },
  {
    id: 'telegram',
    component: TelegramShareButton,
    icon: generateShareIcon('telegram'),
  },
]

const COMMON_ICON_PROPS = {
  size: 64,
  round: true,
}

const SHARE_URL = 'https://yandex-weather.herokuapp.com/feed'

const SimpleModal = styled(BaseSimpleModal)`
  padding: 24px;
  width: 280px;
  display: flex;
`

const getShareTitle = (text, categoryGroup) =>
  `${text.slice(0, 50)}...\
 больше полезных советов в категории ${categoryGroupDisplayNames[categoryGroup]} на Яндекс.Погоде`

export const ShareCardModal = (props) => {
  const { card } = props.meta

  const buttons = SOCIAL_BUTTONS.map(button =>
    <button.component
      key={button.id}
      url={SHARE_URL}
      title={getShareTitle(card.text, card.categoryGroup)}
      description={card.text}
    >
      <button.icon {...COMMON_ICON_PROPS} />
    </button.component>
  )

  return (
    <SimpleModal>
      <ModalMessage
        title="Поделиться"
        content={buttons}
        contentStyle="justify-content: center;"
      />
    </SimpleModal>
  )
}


ShareCardModal.propTypes = {
  meta: PropTypes.shape({ card: {
    categoryGroup: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  } }).isRequired,
}
