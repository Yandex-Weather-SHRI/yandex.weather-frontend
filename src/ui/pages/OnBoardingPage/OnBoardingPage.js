import React from 'react'
import { requestLogin } from 'redux/user/actions'
import { defaultCategories } from 'redux/user/reducer'
import { routeNames } from 'utils/routeNames'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


export const handleSubmitOnboarding = () => {
  requestLogin({
    login: 'testLogin',
    categories: defaultCategories,
    nextRoute: routeNames.feeds,
  })
}

export const Component = ({ isAuthenticated }) => (
  <div>
    {isAuthenticated && <Redirect to={routeNames.feed} />}
    <h1>OnBoardingPage</h1>
    <input type="checkbox" value="setting1" />
    <input type="checkbox" value="setting2" />
    <input type="checkbox" value="setting3" />
    <button onClick={handleSubmitOnboarding}>Save settings</button>
  </div>
)

Component.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.user.oAuthToken),
})

export const OnBoardingPage = connect(mapStateToProps)(Component)
