import React from 'react'
import { requestLogin } from 'redux/user/actions'


export function submitOnboarding(login, settings) {
  requestLogin({
    login,
    settings,
  })
}

const OnBoardingPage = () => (
  <div>
    <h1>OnBoardingPage</h1>
    <input type="checkbox" value="setting1" />
    <input type="checkbox" value="setting2" />
    <input type="checkbox" value="setting3" />
    <button onClick={submitOnboarding} />
  </div>
)
