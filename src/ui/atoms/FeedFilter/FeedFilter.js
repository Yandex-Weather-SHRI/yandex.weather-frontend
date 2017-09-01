import { css } from 'styled-components'

import { RoundedButton } from 'ui/atoms'
import { getFeedFilterStyle } from 'styles/utils'


export const FeedFilter = RoundedButton.extend`
  ${getFeedFilterStyle}

  &:last-of-type {
    margin-right: 0;
  }

  ${p => !p.active && css`
    opacity: 0.3;
  `}
`
