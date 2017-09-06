import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { RoundedButton, ScrollContainer } from 'ui/atoms'


const Container = styled.div`
  height: 56px;
  background-color: rgba(0, 0, 0, 0.07);
  overflow: hidden;
`

const Wrapper = ScrollContainer.extend`
  padding: 0 28px;

  &:after {
    content: '';
    flex: 0 0 28px;
    height: 28px;
  }
`

const TabButton = RoundedButton.extend`
  background: transparent;
  border-radius: 18px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 24px;
  
  ${p => !p.active && css`
    opacity: 0.3;
    border-color: transparent;
  `}
  
  &:last-of-type{
    margin-right: 0;
  }
`

export const TabBar = ({ tabs, currentTab, onTabSelect }) => (
  <Container>
    <Wrapper>
      {tabs.map(({ id, title }) => (
        <TabButton
          onClick={onTabSelect(id)}
          active={id === currentTab}
          key={id}
        >
          {title}
        </TabButton>
      ))}
    </Wrapper>
  </Container>
)

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentTab: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}
