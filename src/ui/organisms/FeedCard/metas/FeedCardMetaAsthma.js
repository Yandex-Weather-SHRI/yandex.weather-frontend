import React from 'react'

import { FeedCardMetaIcon, FeedCardMetaText } from 'ui/atoms'
import { FeedCardMeta, FeedCardMetaSection } from 'ui/molecules'


export const FeedCardMetaAsthma = () => (
  <FeedCardMeta>
    <FeedCardMetaSection>
      <FeedCardMetaIcon name="weather-conditions/humidity" size={24} />
      <FeedCardMetaText textSize={2.6}>82</FeedCardMetaText>
      <FeedCardMetaText textSize={2}>%</FeedCardMetaText>
    </FeedCardMetaSection>
    <FeedCardMetaSection>
      <FeedCardMetaIcon name="weather-conditions/wind" size={24} />
      <FeedCardMetaText textSize={2.6}>15</FeedCardMetaText>
      <FeedCardMetaText textSize={2}>м/с</FeedCardMetaText>
    </FeedCardMetaSection>
  </FeedCardMeta>
)
