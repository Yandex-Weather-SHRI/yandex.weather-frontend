import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Logo } from 'ui/atoms'
import { IconButton } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { requestLogin } from 'redux/user/actions'


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

const PureNavigationBar = () => (
  <Container>
    <Logo />
    <Actions>
      <NavIconButton icon="search" stroke="#fff" />
      <NavIconButton icon="login" onClick={() => requestLogin(routeNames.index)} fill="#fff" />
    </Actions>
  </Container>
)

PureNavigationBar.propTypes = {
  auth: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    auth: {
      authenticated: false,
      avatar: '',
    },
  }
}

export const NavigationBar = connect(mapStateToProps)(PureNavigationBar)
