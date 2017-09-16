import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { FeedCard } from './FeedCard'

storiesOf('organisms/FeedCard', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('simlple feed card',
    withInfo()(() =>
      <FeedCard
        category="health"
        categoryGroup="heart"
        text="текст совета"
        onShareClick={action('share click')}
        onOptionsClick={action('options click')}
      />
    )
  )
