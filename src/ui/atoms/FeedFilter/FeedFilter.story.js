import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { FeedFilter } from './FeedFilter'


storiesOf('atoms/FeedFilter', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('all filters',
    withInfo()(() => (
      <div>
        <FeedFilter
          name="all"
        >
          sample text
        </FeedFilter>
      </div>
    ))
  )
  .add('health filter disabled',
    withInfo()(() => (
      <div>
        <FeedFilter
          name="health"
          active={Boolean(false)}
        >
          sample text
        </FeedFilter>
      </div>
    ))
  )
  .add('health filter enabled',
    withInfo()(() => (
      <div>
        <FeedFilter
          name="health"
          active={Boolean(true)}
        >
          sample text
        </FeedFilter>
      </div>
    ))
  )
