import React, { Children } from 'react'
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
  overflow: hidden;

  .swiper-container {
    overflow: visible;
  }
`

const Slide = styled.div`
  height: auto;
  display: flex;
`

export const Slider = ({ children }) => (
  <Container>
    <Swiper {...settings}>
      {/* eslint-disable react/no-array-index-key */}
      {Children.toArray(children).map((item, idx) => (
        <Slide key={idx}>{item}</Slide>
      ))}
    </Swiper>
  </Container>
)

Slider.propTypes = {
  children: PropTypes.node,
}

Slider.defaultProps = {
  children: null,
}
