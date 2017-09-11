import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from 'ui/atoms'


const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`

const LoaderIcon = styled(Icon)`
  animation: ${spinAnimation} 2000ms linear infinite;
`

export const PageLoader = () => (
  <Container>
    <LoaderIcon name="loader" size={48} />
  </Container>
)
