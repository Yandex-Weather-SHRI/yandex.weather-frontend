import styled, { css } from 'styled-components'

import { getFeedFilterStyle } from 'styles/utils'


export const FeedFilter = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 18px;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  text-transform: uppercase;
  margin-right: 8px;
  transition: opacity 150ms ease-in-out;
  ${getFeedFilterStyle}

  &:last-of-type {
    margin-right: 0;
  }

  ${p => !p.active && css`
    opacity: 0.3;
  `}
`
