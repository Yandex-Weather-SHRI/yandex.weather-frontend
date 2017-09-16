import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { TabBar } from './TabBar'


const mockTabs = [
  {
    id: 0,
    title: 'Сегодня',
  },
  {
    id: 1,
    title: 'ПН',
  },
]

storiesOf('molecules/TabBar', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('dark_blue'))
  .add('tab bar',
    withInfo()(() =>
      <TabBar
        tabs={mockTabs}
        onTabSelect={() => action('select tab')}
        currentTab={1}
      />
    )
  )
