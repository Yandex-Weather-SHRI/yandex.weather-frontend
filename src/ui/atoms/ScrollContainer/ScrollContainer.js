import styled from 'styled-components'


export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`
