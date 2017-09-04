import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { PageLoader } from 'ui/organisms'
import { setToken, fetchAndSetUserInfo, createOrUpdateUserWithCategorySettings } from 'redux/user/actions'
import { getHashParam } from 'utils/location'


const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Page extends React.Component {
  componentDidMount() {
    const token = getHashParam('access_token')
    const { nextRoute, categories } = JSON.parse(decodeURIComponent(getHashParam('state')))
    const { dispatch, history } = this.props

    dispatch(setToken(token))
    dispatch(fetchAndSetUserInfo())
      .then(() => {
        if (categories) {
          dispatch(createOrUpdateUserWithCategorySettings(categories))
        }
        history.replace(nextRoute)
      })
  }

  render() {
    return (
      <Container>
        <PageLoader />
      </Container>
    )
  }
}

Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
}

export const PassportRedirectPage = connect()(withRouter(Page))
