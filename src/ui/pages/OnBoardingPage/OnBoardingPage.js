import React from 'react'
import { requestLogin } from 'redux/user/actions'
import { defaultCategories } from 'redux/user/reducer'
import { routeNames } from 'utils/routeNames'


export const handleSubmitOnboarding = () => {
  requestLogin({
    login: 'testLogin',
    categories: defaultCategories,
    nextRoute: routeNames.feeds,
  })
}

export const OnBoardingPage = () => (
  <div>
    <h1>OnBoardingPage</h1>
    <input type="checkbox" value="setting1" />
    <input type="checkbox" value="setting2" />
    <input type="checkbox" value="setting3" />
    <button onClick={handleSubmitOnboarding}>Save settings</button>
  </div>
)
