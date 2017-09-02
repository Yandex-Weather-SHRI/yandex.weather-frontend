import React from 'react'

import { FeedCardMetaText } from 'ui/atoms'
import { FeedCardMeta, FeedCardMetaSection } from 'ui/molecules'


export const FeedCardMetaHeart = () => (
  <FeedCardMeta>
    <FeedCardMetaSection>
      <FeedCardMetaText textSize={2.6}>6 / 8</FeedCardMetaText>
      <FeedCardMetaText textSize={2}>баллов</FeedCardMetaText>
    </FeedCardMetaSection>
  </FeedCardMeta>
)
