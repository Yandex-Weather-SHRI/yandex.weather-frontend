import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageContent, PageLoader, AppBar, SettingsSection } from 'ui/organisms'
import { IconButton, SettingsCard } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { categoryGroups, categoryGroupCategories } from 'constants/categoryGroup'
import { categoriesDisplayNames, categoriesAdvicesCount } from 'constants/categories'
import { getCategoriesSettings, updateOneUserSetting } from 'redux/user/actions'
import { getNormalizedSettings } from 'redux/user/selectors'


class SettingsPageContainer extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    settings: PropTypes.shape().isRequired,
    getCategoriesSettings: PropTypes.func.isRequired,
    updateOneUserSetting: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getCategoriesSettings()
  }

  handleToggleSettingsItem = ({ name, enabled }) => () => {
    this.props.updateOneUserSetting(name, !enabled)
  }

  render() {
    const { settings, fetching } = this.props

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
        ) : categoryGroups.map(group => (
          group !== 'all' && (
            <SettingsSection key={group} {...{ group }}>
              {categoryGroupCategories[group].map(category => (
                <SettingsCard
                  group={group}
                  catName={categoriesDisplayNames[category]}
                  catAdvices={categoriesAdvicesCount[category]}
                  checked={settings[category].enabled}
                  onClick={this.handleToggleSettingsItem(settings[category])}
                  key={category}
                />
              ))}
            </SettingsSection>
          )
        ))}
      </PageContent>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.user.fetching,
    settings: getNormalizedSettings(state),
  }
}

const mapDispatchToProps = {
  updateOneUserSetting,
  getCategoriesSettings,
}

export const SettingsPage = connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer)

