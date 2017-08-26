import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Icon } from './Icon'


storiesOf('atoms/Icon', module)
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
  .add('Icon with stroke',
    withInfo()(() =>
      <Icon name="star" fill="#ffcc2f" stroke="#ffcc2f" />
    )
  )
