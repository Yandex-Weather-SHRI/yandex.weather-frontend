import React from 'react'
import backgrounds from '@storybook/addon-backgrounds'
import styled from 'styled-components'


const colors = [
  { name: 'white', value: '#ffffff' },
  { name: 'blue', value: '#00aced' },
  { name: 'dark_blue', value: '#3b5998' },
]

export function backgroundDecorator(defaultColor) {
  return backgrounds(colors.map(color => color.name === defaultColor ? { ...color, default: true } : color))
}

export function borderDecorator(storyFn) {
  return (
    <div style={{ border: '1px dashed black' }}>
      { storyFn() }
    </div>
  )
}

export const HorizontalFlexContainer = styled.div`
  display: flex; 
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
  
  & > * {
    margin-right: 10px;
  }  
`
