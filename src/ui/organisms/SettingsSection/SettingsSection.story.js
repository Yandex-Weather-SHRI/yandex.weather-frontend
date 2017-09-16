import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { SettingsSection } from './SettingsSection'


storiesOf('organisms/SettingSection', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('application bar',
    withInfo()(() =>
      <SettingsSection group="health">контент</SettingsSection>
    )
  )
