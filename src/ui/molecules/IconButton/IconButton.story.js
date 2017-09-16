import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { IconButton } from './IconButton'


storiesOf('molecules/IconButton', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('icon buttons',
    withInfo()(() => (
      <div>
        <div>
          <IconButton icon="star" onClick={action('star button clicked!')} />
          <IconButton icon="geolocation" onClick={action('geolocation button clicked!')} />
          <IconButton icon="search" onClick={action('search button clicked!')} />
        </div>
        <div>
          <IconButton fill="#fff" icon="star" onClick={action('white star button clicked')} />
        </div>
      </div>
    ))
  )
  .add('icon-button-with-text',
    withInfo()(() => (
      <div>
        <IconButton icon="search" onClick={action('Search button with text clicked!')}>Поиск</IconButton>
      </div>
    ))
  )
