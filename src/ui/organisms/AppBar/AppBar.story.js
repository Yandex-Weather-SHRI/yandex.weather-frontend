import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'
import { IconButton } from 'ui/molecules'

import { AppBar } from './AppBar'


storiesOf('organisms/AppBar', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('white'))
  .add('application bar',
    withInfo()(() =>
      <AppBar
        title="Настройки"
        elementLeft={
          <IconButton icon="arrow-left" size="24" />
        }
        elementRight={
          <IconButton icon="settings" size="24" />
        }
      />
    )
  )
