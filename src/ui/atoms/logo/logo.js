import React from 'react'
import styled from 'styled-components'
import LogoSvg from 'i/logo.svg'


const Container = styled.div`
  width: 112px;
  height: 32px;

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`

const Logo = () => (
  <Container>
    <LogoSvg />
  </Container>
)

export default Logo
