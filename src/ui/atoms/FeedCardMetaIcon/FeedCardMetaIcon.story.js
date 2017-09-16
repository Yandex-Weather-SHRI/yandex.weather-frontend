import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import styled from 'styled-components'

import { backgroundDecorator, borderDecorator, HorizontalFlexContainer } from 'utils/storyBookDecorators'

import { FeedCardMetaIcon } from './FeedCardMetaIcon'


storiesOf('atoms/FeedCardMetaIcon', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('meta icons',
    withInfo()(() => (
      <HorizontalFlexContainer>
        <FeedCardMetaIcon name="weather-conditions/arrow-up" />
        <FeedCardMetaIcon name="weather-conditions/geomagnetic" />
        <FeedCardMetaIcon name="weather-conditions/humidity" />
        <FeedCardMetaIcon name="weather-conditions/humidity-bad" />
        <FeedCardMetaIcon name="weather-conditions/pressure" />
        <FeedCardMetaIcon name="weather-conditions/waterTemp" />
        <FeedCardMetaIcon name="weather-conditions/wind" />
        <FeedCardMetaIcon name="weather-conditions/wind-bad" />
      </HorizontalFlexContainer>
    ))
  )
