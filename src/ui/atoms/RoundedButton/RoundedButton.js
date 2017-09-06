import styled from 'styled-components'


export const RoundedButton = styled.button`
  display: inline-flex;
  align-items: center;
  height: 36px;
  border-radius: 18px;
  margin: 0;
  padding: 0 16px;
  font: inherit;
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  transition: opacity 150ms ease-in-out;
  border: none;
  letter-spacing: 0.8px;

  &:focus {
    outline: 0;
  }
`
