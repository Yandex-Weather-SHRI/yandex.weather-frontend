import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Avatar } from './Avatar'


storiesOf('atoms', module)
  .add('Avatar',
    withInfo()(() =>
      <Avatar src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-small?rnd=1503592717547" />
    )
  )