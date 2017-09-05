import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { PureWeatherConditions as WeatherConditions } from './WeatherConditions'


storiesOf('molecules/WeatherConditions', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('weather conditions',
    withInfo()(() =>
      <WeatherConditions
        humidity={10}
        pressure={20}
        waterTemp={24}
        wind={31}
      />
    )
  )
