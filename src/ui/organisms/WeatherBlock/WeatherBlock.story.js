import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { PureWeatherBlock as WeatherBlock } from './WeatherBlock'


storiesOf('organisms/WeatherBlock', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('weather block',
    withInfo()(() =>
      <WeatherBlock
        locality='Москва'
        weatherIcon='bkn_d'
        temperature={10}
        condition='Солнечно'
        feel={12}
      />
    )
  )
