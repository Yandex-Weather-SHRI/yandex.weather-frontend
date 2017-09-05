import React from 'react'
import styled from 'styled-components'

import { FeedCard } from 'ui/organisms'
import { getCategoryGroupStyle } from 'styles/utils'


const Container = styled.div`
  ${p => getCategoryGroupStyle(p.card.categoryGroup)}
  width: 328px;
  margin: 0 auto;
  border-radius: 4px;
`

const Underlay = styled.div`
  ${p => getCategoryGroupStyle(p.categoryName)}
  height: 245px;
  position: relative;
  z-index: -1;
  bottom: 233px;
  width: 296px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -233px;
  transform: translateY(233px);
  opacity: 0.8;
`

export const OnBoardingCard = ({ card }) => (
  <div>
    <Container card={card}>
      <FeedCard {...card} onShareClick={() => null} onOptionsClick={() => null} />
    </Container>
    <Underlay categoryName={card.categoryGroup} />
  </div>
)
