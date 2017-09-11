import { css } from 'styled-components'


let BoldFont
let RegularFont
let MediumFont

/* eslint-disable global-require, import/no-unresolved */
try {
  RegularFont = require('assets/fonts/WeatherFontRegular.ttf')
  MediumFont = require('assets/fonts/WeatherFontMedium.ttf')
  BoldFont = require('assets/fonts/WeatherFontBold.ttf')
}
catch (e) {
  RegularFont = require('assets/fonts/HelveticaRegular.ttf')
  MediumFont = require('assets/fonts/HelveticaMedium.ttf')
  BoldFont = require('assets/fonts/HelveticaBold.ttf')
}
/* eslint-enable global-require */

export const fonts = css`
  @font-face {
    font-family: WeatherFont;
    src: url('${RegularFont}') format('truetype');
  }

  @font-face {
    font-family: WeatherFont;
    src: url('${MediumFont}') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: WeatherFont;
    src: url('${BoldFont}') format('truetype');
    font-weight: 700;
  }
`
