import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ShareButtons, generateShareIcon } from 'react-share'

import { ModalMessage } from 'ui/atoms/'

import { SimpleModal as BaseSimpleModal } from './base/SimpleModal'


const {
  TwitterShareButton,
  VKShareButton,
  FacebookShareButton,
  TelegramShareButton,
  OKShareButton,
} = ShareButtons

const SOCIAL_BUTTONS = [
  {
    id: 'twitter',
    component: TwitterShareButton,
    icon: generateShareIcon('twitter'),
    title: 'Твиттер',
  },
  {
    id: 'vk',
    component: VKShareButton,
    icon: generateShareIcon('vk'),
    title: 'Вконтакте',
  },
  {
    id: 'facebook',
    component: FacebookShareButton,
    icon: generateShareIcon('facebook'),
    title: 'Facebook',
  },
  {
    id: 'telegram',
    component: TelegramShareButton,
    icon: generateShareIcon('telegram'),
    title: 'Telegram',
  },
  {
    id: 'ok',
    component: OKShareButton,
    icon: generateShareIcon('ok'),
    title: 'Одноклассники',
  },
]

const SHARE_URL = 'https://yandex-weather.herokuapp.com/'

const SimpleModal = styled(BaseSimpleModal)`
  width: 280px;
  display: flex;
  padding-top: 10px;
  padding-bottom: 2px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Text = styled.div`
  margin-left: 16px;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  text-align: left;
  user-select: none;
  color: rgba(0, 0, 0, 0.87);
`

const ButtonContent = styled.div`
  display: flex;
  padding: 12px 0;
`

const ButtonWrapper = styled.div`
  .SocialMediaShareButton {
    &:focus {
      outline: none;
    }
  }
`

export const ShareCardModal = (props) => {
  const { card } = props.meta

  const buttons = SOCIAL_BUTTONS.map(button =>
    <ButtonWrapper>
      <button.component
        key={button.id}
        url={SHARE_URL}
        title={card.text}
        description={card.text}
        // eslint-disable-next-line max-len
        image="https://raw.githubusercontent.com/Yandex-Weather-SHRI/yandex.weather-frontend/master/src/assets/images/share-images/img-share%403x.png"
      >
        <ButtonContent>
          <button.icon size={24} round />
          <Text>{button.title}</Text>
        </ButtonContent>
      </button.component>
    </ButtonWrapper>
  )

  const modalMessageContent = (
    <Container>
      {buttons}
    </Container>
  )

  return (
    <SimpleModal>
      <ModalMessage
        title="Поделиться"
        content={modalMessageContent}
      />
    </SimpleModal>
  )
}


ShareCardModal.propTypes = {
  meta: PropTypes.shape({
    card: {
      categoryGroup: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  }).isRequired,
}
