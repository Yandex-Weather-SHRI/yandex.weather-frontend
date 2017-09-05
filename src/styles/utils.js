import { css } from 'styled-components'


export function getCategoryGroupStyle(name) {
  switch (name) {
    case 'health':
      return css`
        color: rgba(255, 255, 255, 0.87);
        background-image: linear-gradient(to bottom, #309bb4, #32689a);
        box-shadow:
          0 2px 6px 0 rgba(50, 71, 136, 0.12),
          0 2px 16px 0 rgba(49, 135, 170, 0.42);
      `

    case 'motorists':
      return css`
        color: rgba(255, 255, 255, 0.87);
        background-image: linear-gradient(109deg, #9cddff, #4baffd 52%, #498ffa);
        box-shadow: 0 2px 12px 0 rgba(78, 187, 255, 0.3);
      `

    default:
      return css`
        color: rgba(0, 0, 0, 0.87);
        background-color: #fff;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07), 0 2px 17px 0 rgba(0, 0, 0, 0.01);
        border: solid 1px rgba(0, 0, 0, 0.08);
      `
  }
}

export function getCategoryGradient(name) {
  switch (name) {
    case 'health':
      return 'linear-gradient(to bottom, #309bb4, #32689a)'
    case 'motorists':
      return 'linear-gradient(109deg, #9cddff, #4baffd 52%, #498ffa)'
    default:
      return '#fff'
  }
}
