import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { RoundedButton } from 'ui/atoms'


const Container = styled.div`
  height: 56px;
  background-color: rgba(0, 0, 0, 0.07);
  overflow: hidden;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 28px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    content: '';
    flex: 0 0 10px;
  }
`

const TabButton = RoundedButton.extend`
  height: 36px;
  background: none;
  border-radius: 100px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  margin-right: 24px;
  
  ${p => !p.active && css`
    opacity: 0.3;
    border: none;
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
          onClick={() => onTabSelect(id)}
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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentTab: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}
