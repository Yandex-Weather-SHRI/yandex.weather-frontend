import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon as IconBase } from '../Icon/Icon'


const Container = styled.div`
  display: flex;
  align-items: center;
  
  & + & {
    margin-left: 16px;
  }
`

const Icon = styled(IconBase)`
  display: inline-block;
  margin-right: 4px;
`
const Text = styled.span`
  font-weight: 500;
  font-size: 12px
`

export const IconWithText = ({ iconName, text }) =>
  <Container>
    <Icon name={iconName} />
    <Text>{text}</Text>
  </Container>

IconWithText.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
}
