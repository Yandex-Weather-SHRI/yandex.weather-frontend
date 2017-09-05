import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageContent, PageLoader, AppBar, SettingsSection } from 'ui/organisms'
import { IconButton, SettingsCard } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { updateOneUserSetting } from 'redux/user/actions'
import { getNormalizedSettings } from 'redux/user/selectors'


class SettingsPageContainer extends Component {
  static propTypes = {
    settingsSchema: PropTypes.shape().isRequired,
    fetching: PropTypes.bool.isRequired,
    settings: PropTypes.shape().isRequired,
    updateOneUserSetting: PropTypes.func.isRequired,
  }

  handleToggleSettingsItem = ({ name, enabled }) => () => {
    this.props.updateOneUserSetting(name, !enabled)
  }

  render() {
    const { settingsSchema, settings, fetching } = this.props

    return (
      <PageContent>
        <AppBar
          title="Настройки"
          elementLeft={
            <Link to={routeNames.feed}>
              <IconButton icon="arrow-left" size="24" />
            </Link>
          }
        />
        {fetching ? (
          <PageLoader />
        ) : Object.keys(settingsSchema).map(groupName => (
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
                advicesCount="3 совета"
                onClick={this.handleToggleSettingsItem(settings[category])}
              />
            ))}
          </SettingsSection>
        ))}
      </PageContent>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.user.fetching,
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

