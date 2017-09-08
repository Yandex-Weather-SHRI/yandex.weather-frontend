import styled from 'styled-components'


export const FeedCardMetaText = styled.span`
  font-size: ${p => p.textSize}rem;
  line-height: 1.2;
  letter-spacing: 0.8px;
  margin-right: 8px;
  color: #000;

  &:last-of-type {
    margin-right: 0;
  }
`
