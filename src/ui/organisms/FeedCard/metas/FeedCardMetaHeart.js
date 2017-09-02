import React from 'react'

import { FeedCardMetaIcon, FeedCardMetaText } from 'ui/atoms'
import { FeedCardMeta, FeedCardMetaSection } from 'ui/molecules'


export const FeedCardMetaHeart = () => (
  <FeedCardMeta>
    <FeedCardMetaSection>
      <FeedCardMetaIcon name="weather-conditions/geomagnetic" size={24} />
      <FeedCardMetaText textSize={2.6}>6 / 8</FeedCardMetaText>
      <FeedCardMetaText textSize={2}>баллов</FeedCardMetaText>
    </FeedCardMetaSection>
  </FeedCardMeta>
)
