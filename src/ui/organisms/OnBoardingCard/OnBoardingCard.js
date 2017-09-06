import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FeedCard } from 'ui/organisms'
import { getCategoryGroupStyle } from 'styles/utils'


const Container = styled.div`
  ${p => getCategoryGroupStyle(p.card.categoryGroup)}
  width: 328px;
  height: 245px;
  margin: 24px auto;
  border-radius: 4px;

  &:before {
    ${p => getCategoryGroupStyle(p.card.categoryGroup)}
    opacity: 0.8;
    position: absolute;
    content: '';
    height: 245px;
    width: 296px;
    z-index: -1;
    margin: 0 16px;
    border-radius: 4px;
    margin-top: 12px;
  }
`

export const OnBoardingCard = ({ card }) => (
  <Container card={card}>
    <FeedCard {...card} />
  </Container>
)

OnBoardingCard.propTypes = {
  card: PropTypes.shape(FeedCard.propTypes).isRequired,
}
