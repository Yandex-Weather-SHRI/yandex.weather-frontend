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
  flex: 1 0 auto;
`

const LoaderIcon = styled(Icon)`
  animation: ${spinAnimation} 2000ms linear infinite;
`

export const PageLoader = () => (
  <Container>
    <LoaderIcon name="loader" size={48} />
  </Container>
)
