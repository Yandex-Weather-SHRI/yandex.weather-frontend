import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { RoundedButton } from './RoundedButton'


storiesOf('atoms/RoundedButton', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('simple icon with text',
    withInfo()(() => (
      <RoundedButton>simple rounded button</RoundedButton>
    ))
  )
