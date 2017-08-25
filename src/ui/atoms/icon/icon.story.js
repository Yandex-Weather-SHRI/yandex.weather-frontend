import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Icon from './icon'


storiesOf('atoms/icon', module)
  .add('icons',
    withInfo()(() => (
      <div>
        <Icon name="star" />
        <Icon name="exit" />
        <Icon name="geolocation" />
        <Icon name="search" />
      </div>
    ))
  )
  .add('icon with stroke',
    withInfo()(() =>
      <Icon name="star" fill="#ffcc2f" stroke="#ffcc2f" />
    )
  )
