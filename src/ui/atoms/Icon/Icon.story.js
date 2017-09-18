import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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
  .add('Icon with stroke',
    withInfo()(() =>
      <Icon name="star" fill="#ffcc2f" stroke="#ffcc2f" />
    )
  )
