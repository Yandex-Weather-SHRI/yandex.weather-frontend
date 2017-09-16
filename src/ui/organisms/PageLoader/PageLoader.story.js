import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { PageLoader } from './PageLoader'

storiesOf('organisms/PageLoader', module)
  .add('page loader',
    withInfo()(() =>
      <PageLoader />
    )
  )
