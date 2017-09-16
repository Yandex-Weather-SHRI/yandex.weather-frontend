import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageTitle, PageContent, AppBar, SettingsSection } from 'ui/organisms'
import { AppBarButton, SettingsCard } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { updateOneUserSetting } from 'redux/user/actions'
import { getNormalizedSettings } from 'redux/user/selectors'


function getEnabledSettingsLength(settingsSchema, groupName, settings) {
  return Object.keys(settingsSchema[groupName].categories).filter(category =>
    settings[category].enabled
  ).length
}

function getTotalSettingsLength(settingsSchema, groupName) {
  return Object.keys(settingsSchema[groupName].categories).length
}

class SettingsPageContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    settingsSchema: PropTypes.shape().isRequired,
    settings: PropTypes.shape().isRequired,
    updateOneUserSetting: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: 'Настройки',
  }

  handleToggleSettingsItem = ({ name, enabled }) => () => {
    this.props.updateOneUserSetting(name, !enabled)
  }

  render() {
    const { title, settingsSchema, settings } = this.props

    return (
      <PageTitle {...{ title }}>
        <PageContent withFixedBar>
          <AppBar
            {...{ title }}
            elementLeft={
              <AppBarButton
                icon="arrow-left"
                iconSize={24}
                to={routeNames.feed}
              />
            }
          />
          {Object.keys(settingsSchema).map(groupName => (
            <SettingsSection
              key={groupName}
              groupName={groupName}
              groupTitle={settingsSchema[groupName].title}
              enabledSettingsLength={getEnabledSettingsLength(settingsSchema, groupName, settings)}
              totalSettingsLength={getTotalSettingsLength(settingsSchema, groupName)}
            >
              {Object.keys(settingsSchema[groupName].categories).map(category => (
                <SettingsCard
                  key={category}
                  groupName={groupName}
                  checked={settings[category].enabled}
                  categoryName={category}
                  categoryTitle={settingsSchema[groupName].categories[category]}
                  onClick={this.handleToggleSettingsItem(settings[category])}
                />
              ))}
            </SettingsSection>
          ))}
        </PageContent>
      </PageTitle>
    )
  }
}

function mapStateToProps(state) {
  return {
    settingsSchema: state.user.settings.schema,
    settings: getNormalizedSettings(state),
  }
}

const mapDispatchToProps = {
  updateOneUserSetting,
}

export const SettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPageContainer)

