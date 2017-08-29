import React from 'react'
import { requestLogin } from 'redux/user/actions'
import { defaultCategories } from 'redux/user/reducer'


export const handleSubmitOnboarding = () => {
  requestLogin({
    login: 'testLogin',
    categories: defaultCategories,
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
