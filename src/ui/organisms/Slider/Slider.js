import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'

import './slider.css'


const settings = {
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: '.swiper-pagination',
  spaceBetween: 14,
}

const Container = styled.div`
  padding: 0 26px;

  .swiper-container {
    overflow: visible;
  }
`

export const Slider = ({ children }) => (
  <Container>
    <Swiper {...settings}>
      {children}
    </Swiper>
  </Container>
)

Slider.propTypes = {
  children: PropTypes.node,
}

Slider.defaultProps = {
  children: null,
}
