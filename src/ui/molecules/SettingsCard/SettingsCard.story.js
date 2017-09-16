import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { SettingsCard } from './SettingsCard'


storiesOf('molecules/SettingsCard', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('health card disabled',
    withInfo()(() =>
      <SettingsCard
        group="health"
        catName="Сердце"
        catAdvices="3 совета"
        checked={Boolean(false)}
        onClick={action('click settings card')}
      />
    )
  )
  .add('health card enabled',
    withInfo()(() =>
      <SettingsCard
        group="health"
        catName="Сердце"
        catAdvices="3 совета"
        checked={Boolean(true)}
        onclick={action('click settings card')}
      />
    )
  )
