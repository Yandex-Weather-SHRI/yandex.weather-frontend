import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar } from 'ui/organisms'
import { IconButton } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'


export const SettingsPage = () => (
  <div style={{ width: '100%' }}>
    <AppBar
      title="Настройки"
      elementLeft={
        <Link to={routeNames.feed}>
          <IconButton icon="arrow-left" size="24" />
        </Link>
      }
    />
  </div>
)
