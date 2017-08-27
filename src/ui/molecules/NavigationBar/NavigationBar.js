import React from 'react'
import styled from 'styled-components'

import { Logo } from 'ui/atoms'
import { IconButton } from 'ui/molecules'


const Container = styled.div`
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`

const Actions = styled.div`
  margin-left: auto;
`

const NavIconButton = styled(IconButton)`
  & + & {
    margin-left: 8px;
  }
`

export const NavigationBar = () => (
  <Container>
    <Logo />
    <Actions>
      <NavIconButton icon="search" stroke="#fff" />
      <NavIconButton icon="login" fill="#fff" />
    </Actions>
  </Container>
)
