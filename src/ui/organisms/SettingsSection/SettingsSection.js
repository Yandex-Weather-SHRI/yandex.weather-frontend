import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon, ScrollContainer } from 'ui/atoms'


const Container = styled.div`
  margin-top: 8px;
  background-color: #f7f7f7;
`

const Heading = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.87);
`

const Counter = styled.div`
  font-size: 1.4rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.87);
  margin-left: auto;
`

const Content = styled(ScrollContainer) `
  padding: 24px 16px;

  &:after {
    content: '';
    flex: 0 0 16px;
    height: 16px;
  }
`

export const SettingsSection = ({
  groupName,
  groupTitle,
  enabledSettingsLength,
  totalSettingsLength,
  children,
}) => (
  <Container>
    <Heading>
      <Icon name={`categoryGroups/${groupName}`} size={24} />
      <Title>{groupTitle}</Title>
      <Counter>{enabledSettingsLength} из {totalSettingsLength}</Counter>
    </Heading>
    <Content>
      {children}
    </Content>
  </Container>
)

SettingsSection.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  enabledSettingsLength: PropTypes.number.isRequired,
  totalSettingsLength: PropTypes.number.isRequired,
}
