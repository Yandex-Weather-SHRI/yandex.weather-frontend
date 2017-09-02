import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, SettingsSection } from 'ui/organisms'
import { IconButton } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { categoryGroups } from 'constants/categoryGroup'


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
    {categoryGroups.map((group) => {
      if (group === 'all') return null
      return (
        <SettingsSection category={group}>
          some content here
        </SettingsSection>
      )
    })}
  </div>
)
