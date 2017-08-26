import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import WeatherBlock from './WeatherBlock'


storiesOf('organisms', module)
  .add('WeatherBlock',
    withInfo()(() =>
      <WeatherBlock />
    )
  )
