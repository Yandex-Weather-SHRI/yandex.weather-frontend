import styled from 'styled-components'


export const FeedCardMetaText = styled.span`
  font-size: ${p => p.textSize}rem;
  margin-right: 8px;
  letter-spacing: 0.8px;

  &:last-of-type {
    margin-right: 0;
  }
`
