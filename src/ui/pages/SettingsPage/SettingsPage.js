import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, SettingsSection } from 'ui/organisms'
import { IconButton, SettingsCard } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { categoryGroups, categoryGroupCategories } from 'constants/categoryGroup'
import { categoriesDisplayNames, categoriesAdvicesCount } from 'constants/categories'


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
        <SettingsSection key={group} {...{ group }}>
          {
            categoryGroupCategories[group].map(cat => (
              <SettingsCard
                group={group}
                category={{
                  name: categoriesDisplayNames[cat],
                  advices: categoriesAdvicesCount[cat],
                }}
                onClick={console.log}
                key={cat}
              />
            ))
          }
        </SettingsSection>
      )
    ))}
  </div>
)
