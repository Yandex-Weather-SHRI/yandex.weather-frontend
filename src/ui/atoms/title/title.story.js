import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Title from './title'


storiesOf('atoms', module)
  .add('title',
    withInfo()(() =>
      <Title>сегодня, 25 августа</Title>
    )
  )
