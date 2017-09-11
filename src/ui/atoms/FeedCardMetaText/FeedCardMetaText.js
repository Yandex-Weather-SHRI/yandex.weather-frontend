import styled from 'styled-components'


export const FeedCardMetaText = styled.span`
  font-size: ${p => p.textSize || 2.8}rem;
  line-height: 1.24;
  letter-spacing: 0.8px;
  margin-right: 8px;
  color: #000;

  &:last-of-type {
    margin-right: 0;
  }
`
