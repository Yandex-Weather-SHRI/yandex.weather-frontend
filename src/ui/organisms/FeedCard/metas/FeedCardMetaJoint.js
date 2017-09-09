import React from 'react'

import { FeedCardMetaIcon, FeedCardMetaText } from 'ui/atoms'
import { FeedCardMeta, FeedCardMetaSection } from 'ui/molecules'


export const FeedCardMetaJoint = () => (
  <FeedCardMeta>
    <FeedCardMetaSection>
      <FeedCardMetaIcon name="weather-conditions/humidity" size={24} />
      <FeedCardMetaText>78 %</FeedCardMetaText>
    </FeedCardMetaSection>
    <FeedCardMetaSection>
      <FeedCardMetaIcon name="weather-conditions/arrow-up" size={24} />
      <FeedCardMetaText>14°С</FeedCardMetaText>
    </FeedCardMetaSection>
  </FeedCardMeta>
)
