import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { PureNavigationBar as NavigationBar } from './NavigationBar'


storiesOf('molecules/NaviagationBar', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('navigation bar',
    withInfo()(() =>
      <NavigationBar
        avatarUrl="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-small?rnd=1503592717547"
      />
    )
  )
