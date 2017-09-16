import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { Title } from './Title'


storiesOf('atoms/Title', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('title',
    withInfo()(() =>
      <Title>сегодня, 25 августа</Title>
    )
  )
