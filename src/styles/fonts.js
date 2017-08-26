import { css } from 'styled-components'

import HelveticaRegular from 'assets/fonts/HelveticaRegular.ttf'
import HelveticaMedium from 'assets/fonts/HelveticaMedium.ttf'
import HelveticaBold from 'assets/fonts/HelveticaBold.ttf'


export const fonts = css`
  @font-face {
    font-family: Helvetica;
    src: url('${HelveticaRegular}') format('truetype');
  }

  @font-face {
    font-family: Helvetica;
    src: url('${HelveticaMedium}') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: Helvetica;
    src: url('${HelveticaBold}') format('truetype');
    font-weight: 700;
  }
`
