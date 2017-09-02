import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategoriesSettings, updateOneUserSetting } from 'redux/user/actions'


export class SettingsComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCategoriesSettings())
  }

  handleUpdateSettings = ({ name, enabled }) => () => {
    this.props.dispatch(updateOneUserSetting(name, !enabled))
  }

  render() {
    return (
      <div>
        {this.props.settings.map(item => (
          <div key={item.name}>
            <input
              onClick={this.handleUpdateSettings(item)}
              type="checkbox"
              name={item.name}
              checked={item.enabled}
            />
            {item.name}
          </div>
        ))}
      </div>
    )
  }
}

SettingsComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      enabled: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

function mapStateToProps(state) {
  return {
    settings: state.user.settings.categories,
  }
}

export const Settings = connect(mapStateToProps)(withRouter(SettingsComponent))
