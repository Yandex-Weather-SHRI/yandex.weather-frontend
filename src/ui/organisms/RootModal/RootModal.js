import React from 'react'
import styled from 'styled-components'
import { CardOptionsModal } from '../../modals/CardOptionsModal'

const Container = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.5);
`

export class RootModal extends React.Component {

  render() {
    return (
      <Container>
        <CardOptionsModal />
      </Container>
    )
  }
}
