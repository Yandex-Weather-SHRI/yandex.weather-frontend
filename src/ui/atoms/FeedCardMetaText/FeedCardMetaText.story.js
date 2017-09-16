import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { FeedCardMetaText } from './FeedCardMetaText'


storiesOf('atoms/FeedCardMetaText', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('meta text',
    withInfo()(() => (
      <div>
        <FeedCardMetaText textSize={2.6}>15</FeedCardMetaText>
        <FeedCardMetaText textSize={2}>м/с</FeedCardMetaText>
      </div>
    ))
  )
