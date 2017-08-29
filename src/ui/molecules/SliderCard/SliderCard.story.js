import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { SliderCard } from './SliderCard'


storiesOf('molecules/SliderCard', module)
  .add('SliderCard',
    withInfo()(() => (
      <div style={{ fontFamily: 'sans-serif' }}>
        <div style={{ margin: '40px 0' }}>
          <SliderCard buttonText="Товарища нет" iconName="location_arrow">
            На <strong>вкус</strong> и цвет
          </SliderCard>
        </div>
        <SliderCard
          buttonText="Купить сало"
          bg="linear-gradient(to bottom, #9cddff, #4baffd 52%, #498ffa);"
          color="#fff"
          borderColor="#fff"
        >
          <strong>Наше сало самое недорогое, а ещё неплохо согревает!</strong>
        </SliderCard>
      </div>
    ))
  )
