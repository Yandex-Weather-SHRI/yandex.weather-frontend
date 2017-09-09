import React from 'react'

import { FeedCardMetaIcon, FeedCardMetaText } from 'ui/atoms'
import { FeedCardMeta, FeedCardMetaSection } from 'ui/molecules'


export const FeedCardMetaHead = () => (
  <FeedCardMeta>
    <FeedCardMetaSection>
      <FeedCardMetaIcon name="weather-conditions/pressure" size={24} />
      <FeedCardMetaText textSize={2.8}>6 баллов</FeedCardMetaText>
    </FeedCardMetaSection>
  </FeedCardMeta>
)
