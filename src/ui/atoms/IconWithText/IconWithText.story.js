import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { IconWithText } from './IconWithText'


storiesOf('atoms/IconWithText', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('simple icon with text',
    withInfo()(() => (
      <IconWithText iconName="check" text="simple text" />
    ))
  )
