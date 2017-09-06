import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FeedCard } from 'ui/organisms'
import { getCategoryGroupStyle } from 'styles/utils'


const Container = styled.div`
  ${p => getCategoryGroupStyle({ name: p.categoryGroup })}
  position: relative;
  border-radius: 4px;

  &:before {
    content: '';
    opacity: 0.8;
    position: absolute;
    z-index: -1;
    left: 20px;
    right: 20px;
    top: 12px;
    height: 100%;
    background: inherit;
    box-shadow: inherit;
    border-radius: inherit;
  }
`

export const FeedCardBoard = ({ categoryGroup, ...props }) => (
  <Container {...{ categoryGroup }}>
    <FeedCard
      {...props}
      onShareClick={null}
      onOptionsClick={null}
    />
  </Container>
)

FeedCardBoard.propTypes = {
  categoryGroup: PropTypes.string.isRequired,
}
