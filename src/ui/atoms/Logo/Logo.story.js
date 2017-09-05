import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import styled from 'styled-components'

import { backgroundDecorator, borderDecorator } from 'utils/storyBookDecorators'

import { Logo } from './Logo'


storiesOf('atoms/Logo', module)
  .addDecorator(borderDecorator)
  .addDecorator(backgroundDecorator('blue'))
  .add('logo',
    withInfo()(() => (
      <Logo />
    ))
  )
