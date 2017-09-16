import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import styled from 'styled-components'

import { FeedCardMetaIcon } from 'ui/atoms'
import { backgroundDecorator, borderDecorator, HorizontalFlexContainer } from 'utils/storyBookDecorators'

import { Icon } from './Icon'


storiesOf('atoms/Icon', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('icons',
    withInfo()(() => (
      <HorizontalFlexContainer>
        <Icon name="add-circle" />
        <Icon name="arrow-left" />
        <Icon name="bkn_d" />
        <Icon name="cancel" />
        <Icon name="check" />
        <Icon name="check-circle" />
        <Icon name="geolocation" />
        <Icon name="loader" />
        <Icon name="location_arrow" />
        <Icon name="login" />
        <Icon name="more" />
        <Icon name="no-eye" />
        <Icon name="search" />
        <Icon name="settings" />
        <Icon name="share" />
        <Icon name="star" />
        <Icon name="exit" />
      </HorizontalFlexContainer>
    ))
  )
  .add('categories and groups',
    withInfo()(() => (
      <HorizontalFlexContainer>
        <Icon name="categories/asthma" size="60" />
        <Icon name="categories/head-pain" size="60" />
        <Icon name="categories/heart" size="60" />
        <Icon name="categories/joint" size="60" />
        <Icon name="categories/health" size="60" />
        <Icon name="categories/motorists" size="60" />
      </HorizontalFlexContainer>
    ))
  )
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
  .add('Icon with stroke',
    withInfo()(() =>
      <Icon name="star" fill="#ffcc2f" stroke="#ffcc2f" />
    )
  )
