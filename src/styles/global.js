import { injectGlobal, css } from 'styled-components'

import { fonts } from './fonts'


export const globalStyles = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    font: 10px/1.6 WeatherFont, Arial, sans-serif;
  }

  body {
    color: #000;
    background-color: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }
`

// eslint-disable-next-line
injectGlobal`
  ${fonts}
  ${globalStyles}
`
