import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  margin: 16px 0;
`

const Bullet = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  opacity: ${p => p.activeIndex ? 1 : 0.2};
  border-radius: 100%;
  background: #000;
  margin: 0 5px;
  transition: opacity 150ms ease-in-out;
`


export const PaginationBullets = ({ total, activeIndex }) => (
  <Container>
    {[...Array(total).keys()].map(bulletIndex => (
      <Bullet activeIndex={bulletIndex === activeIndex} key={bulletIndex} />
    ))}
  </Container>
)

PaginationBullets.PropTypes = {
  activeIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
