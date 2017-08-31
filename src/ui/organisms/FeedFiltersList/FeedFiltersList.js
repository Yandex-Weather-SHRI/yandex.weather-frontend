import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FeedFilter } from 'ui/atoms'


const Container = styled.div`
  overflow: hidden;
  width: 100vw;
`

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 16px 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    content: '';
    flex: 0 0 8px;
  }
`

export const FeedFiltersList = ({ list, setFeedFilter }) => (
  <Container>
    <Wrapper>
      {list.map(({ name, title, active }) => (
        <FeedFilter
          {...{ name, active }}
          key={title}
          onClick={setFeedFilter(name, !active)}
        >
          {title}
        </FeedFilter>
      ))}
    </Wrapper>
  </Container>
)

FeedFiltersList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setFeedFilter: PropTypes.func.isRequired,
}
