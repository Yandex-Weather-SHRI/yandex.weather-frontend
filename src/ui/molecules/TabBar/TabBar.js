import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { RoundedButton, ScrollContainer } from 'ui/atoms'


const Container = styled.div`
  height: 56px;
  background-color: #f6f7f8;
  overflow: hidden;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 1;
    width: 28px;
    height: 100%;
    pointer-events: none;
  }

  &:before {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f6f7f8);
    left: 0;
  }

  &:after {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f6f7f8);
    right: 0;
  }
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
  background-color: ${p => p.active ? '#fff' : 'transparent'};
  padding: 0 24px;
  color: #000;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-right: 24px;
  position: relative;
  transition:
    opacity 150ms ease-in-out,
    background-color 150ms ease-in-out,
    box-shadow 150ms ease-in-out;

  ${p => p.active && css`
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);

    &:active {
      opacity: 1;
    }
  `}
  
  ${p => p.alert && css`
    &:after {
      display: inline-block;
      content: '';
      width: 4px;
      height: 4px;
      background-color: #f05756;
      border-radius: 50%;
      position: absolute;
      top: 9px;
      right: 18px;
    }
  `}

  &:last-of-type{
    margin-right: 0;
  }
`

export class TabBar extends PureComponent {
  getScrollPositionBySelectedIndex(index) {
    return this.buttons.reduce((acc, item, idx) => {
      if (idx < index) {
        return acc + item.clientWidth
      }
      return acc
    }, 0)
  }

  setButtonsRef = (element) => {
    if (!this.buttons.includes(element)) {
      this.buttons = this.buttons.concat(element)
    }
  }

  createOnTabSelect = id => () => {
    // TODO: Добавить анимацию скрола
    this.wrapper.scrollLeft = this.getScrollPositionBySelectedIndex(id)
    this.props.onTabSelect(id)()
  }

  buttons = []

  render() {
    const { tabs, currentTab } = this.props

    return (
      <Container>
        <Wrapper innerRef={e => this.wrapper = e}>
          {tabs.map(({ id, title, alert }) => (
            <TabButton
              innerRef={this.setButtonsRef}
              onClick={this.createOnTabSelect(id)}
              active={id === currentTab}
              alert={alert}
              key={id}
            >
              {title}
            </TabButton>
          ))}
        </Wrapper>
      </Container>
    )
  }
}

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      title: PropTypes.string.isRequired,
      alert: PropTypes.bool.isRequired,
    })
  ).isRequired,
  currentTab: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}
