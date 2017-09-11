import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FeedCard } from 'ui/organisms'


const Container = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.02) 99%);
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
  padding: 1px;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    background-color: #fff;
    border-radius: inherit;
  }

  &:before {
    content: '';
    opacity: 0.8;
    position: absolute;
    z-index: -1;
    left: 20px;
    right: 20px;
    top: 12px;
    height: 100%;
    background-color: #fff;
    background-image: inherit;
    border-radius: inherit;
    box-shadow: 0 2px 6px 0 rgba(36, 36, 36, 0.12), 0 2px 16px 0 rgba(255, 255, 255, 0.42);
  }
`

export const FeedCardBoard = ({ categoryGroup, ...props }) => (
  <Container {...{ categoryGroup }}>
    <FeedCard
      {...props}
      categoryGroup={categoryGroup}
      onShareClick={() => {}}
      onOptionsClick={() => {}}
    />
  </Container>
)

FeedCardBoard.propTypes = {
  categoryGroup: PropTypes.string.isRequired,
}
