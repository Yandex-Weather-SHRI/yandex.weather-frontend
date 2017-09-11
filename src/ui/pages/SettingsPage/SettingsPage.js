import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageTitle, PageContent, AppBar, SettingsSection } from 'ui/organisms'
import { IconButton, SettingsCard } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { updateOneUserSetting } from 'redux/user/actions'
import { getNormalizedSettings } from 'redux/user/selectors'


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
              <Link to={routeNames.feed}>
                <IconButton icon="arrow-left" size="24" />
              </Link>
            }
          />
          {Object.keys(settingsSchema).map(groupName => (
            <SettingsSection
              key={groupName}
              groupName={groupName}
              groupTitle={settingsSchema[groupName].title}
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

