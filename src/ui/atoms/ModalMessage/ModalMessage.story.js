import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { ModalMessage } from './ModalMessage'


storiesOf('atoms/ModalMessage', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('just modal message',
    withInfo()(() => (
      <ModalMessage
        title="Спасибо"
        content="Ваш отзыв передан в Яндекс. Благодаря им мы делаем советы лучше"
      />
    ))
  )
