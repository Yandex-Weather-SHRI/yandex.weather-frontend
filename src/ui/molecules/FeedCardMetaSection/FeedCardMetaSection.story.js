import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { FeedCardMetaIcon, FeedCardMetaText } from 'ui/atoms'
import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { FeedCardMetaSection } from './FeedCardMetaSection'


storiesOf('molecules/FeedCardMetaSection', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('one feed card meta section',
    withInfo()(() =>
      <FeedCardMetaSection>
        <FeedCardMetaIcon name="weather-conditions/humidity" size={24} />
        <FeedCardMetaText textSize={2.6}>78</FeedCardMetaText>
        <FeedCardMetaText textSize={2}>%</FeedCardMetaText>
      </FeedCardMetaSection>
    )
  )
