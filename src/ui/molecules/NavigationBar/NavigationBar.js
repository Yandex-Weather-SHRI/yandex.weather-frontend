import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Logo, Avatar } from 'ui/atoms'
import { IconButton } from 'ui/molecules'
import { routeNames } from 'utils/routeNames'
import { requestLogin, requestLogout } from 'redux/user/actions'


const Container = styled.div`
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const NavIconButton = styled(IconButton)`
  & + & {
    margin-left: 8px;
  }
`

export const PureNavigationBar = ({ avatarUrl }) => (
  <Container>
    <Logo />
    <Actions>
      <NavIconButton icon="search" stroke="#fff" />
      {avatarUrl
        ? <Avatar src={avatarUrl} style={{ marginLeft: 12 }} onClick={() => requestLogout()} /> // todo designer
        : <NavIconButton icon="login" onClick={() => requestLogin({ nextRoute: routeNames.index })} fill="#fff" />
      }
    </Actions>
  </Container>
)

PureNavigationBar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    avatarUrl: state.user.avatarUrl,
  }
}

export const NavigationBar = connect(mapStateToProps)(PureNavigationBar)
