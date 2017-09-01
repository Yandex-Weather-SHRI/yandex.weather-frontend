import styled from 'styled-components'


export const RoundedButton = styled.button`
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
  border: none;

  &:focus {
    outline: 0;
  }
`
