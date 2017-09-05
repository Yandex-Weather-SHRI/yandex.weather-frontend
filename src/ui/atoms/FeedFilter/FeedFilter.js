import { css } from 'styled-components'

import { RoundedButton } from 'ui/atoms'
import { getCategoryGroupStyle } from 'styles/utils'


export const FeedFilter = RoundedButton.extend`
  ${p => getCategoryGroupStyle(p.name)}
  margin-right: 8px;

  &:last-of-type {
    margin-right: 0;
  }

  ${p => !p.active && css`
    opacity: 0.3;
  `}
`
