import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import IconButton from './icon-button'


storiesOf('molecules/icon-button', module)
  .add('icon-buttons',
    withInfo()(() => (
      <div>
        <div>
          <IconButton iconName="star" onClick={action('star button clicked!')} />
          <IconButton iconName="exit" onClick={action('exit button clicked!')} />
          <IconButton iconName="geolocation" onClick={action('geolocation button clicked!')} />
          <IconButton iconName="search" onClick={action('search button clicked!')} />
        </div>
        <div style={{ backgroundColor: '#000' }}>
          <IconButton fill="#fff" iconName="star" onClick={action('white star button clicked')} />
        </div>
      </div>
    ))
  )
  .add('icon-button-with-text',
    withInfo()(() => (
      <div>
        <IconButton iconName="search" onClick={action('Search button with text clicked!')}>Поиск</IconButton>
      </div>
    ))
  )
