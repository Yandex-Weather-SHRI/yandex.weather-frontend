import { css } from 'styled-components'

import { statuses } from 'constants/statuses'


export function getStatusStyles(status) {
  switch (status) {
    case statuses.best:
      return css`
        color: #fff;
        background-color: #2fd2b4;
      `

    case statuses.ok:
      return css`
        color: rgba(0, 0, 0, 0.7);
        background-color: #fbdd4c;
      `

    case statuses.bad:
      return css`
        color: #fff;
        background-color: #f05756;
      `

    default:
      return css`
        color: #fff;
        background-color: #f6f7f8;
      `
  }
}
