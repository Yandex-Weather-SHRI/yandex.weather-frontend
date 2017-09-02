import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, SettingsSection } from 'ui/organisms'
import { IconButton, SettingsCard } from 'ui/molecules'
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
    {categoryGroups.map(group => (
      group !== 'all' && (
        <SettingsSection {...{ group }}>
          {// TODO: сделать map для всех категорий групп
          }
          <SettingsCard group={group} catName='Сердце' catAdvices='3 совета' onClick={() => null} />
        </SettingsSection>
      )
    ))}
  </div>
)
