import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { FeedCardMetaSection } from 'ui/molecules'
import { FeedCardMetaIcon, FeedCardMetaText } from 'ui/atoms'
import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { FeedCardMeta } from './FeedCardMeta'


storiesOf('molecules/FeedCardMeta', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('feed card meta',
    withInfo()(() =>
      <FeedCardMeta>
        <FeedCardMetaSection>
          <FeedCardMetaIcon name="weather-conditions/humidity" size={24} />
          <FeedCardMetaText textSize={2.6}>78</FeedCardMetaText>
          <FeedCardMetaText textSize={2}>%</FeedCardMetaText>
        </FeedCardMetaSection>
        <FeedCardMetaSection>
          <FeedCardMetaIcon name="weather-conditions/arrow-up" size={24} />
          <FeedCardMetaText textSize={2.6}>14°</FeedCardMetaText>
          <FeedCardMetaText textSize={2}>С</FeedCardMetaText>
        </FeedCardMetaSection>
      </FeedCardMeta>
    )
  )
