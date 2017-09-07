import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { PageLoader, PageContent } from 'ui/organisms'
import { setToken, fetchAndSetUserInfo, createOrUpdateUserWithCategorySettings } from 'redux/user/actions'
import { getHashParam } from 'utils/location'


class PassportRedirectPageContainer extends React.Component {
  static propTypes = {
    setToken: PropTypes.func.isRequired,
    fetchAndSetUserInfo: PropTypes.func.isRequired,
    createOrUpdateUserWithCategorySettings: PropTypes.func.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  }

  componentDidMount() {
    const error = getHashParam('error')
    const token = getHashParam('access_token')
    const { nextRoute, categories } = JSON.parse(decodeURIComponent(getHashParam('state')))

    if (error || !token) {
      this.props.history.replace('/')
    }
    else {
      this.props.setToken(token)
      this.props.fetchAndSetUserInfo()
        .then(() => {
          this.props.createOrUpdateUserWithCategorySettings(categories || [])
          this.props.history.replace(nextRoute)
        })
    }
  }

  render() {
    return (
      <PageContent>
        <PageLoader />
      </PageContent>
    )
  }
}

const mapDispatchToProps = {
  setToken,
  fetchAndSetUserInfo,
  createOrUpdateUserWithCategorySettings,
}

export const PassportRedirectPage = connect(
  null,
  mapDispatchToProps
)(PassportRedirectPageContainer)
