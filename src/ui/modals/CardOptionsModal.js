import React from 'react'
import styled from 'styled-components'
import { SimpleModal as BaseSimpleModal } from './base/SimpleModal';
import { IconWithText } from '../atoms/IconWithText/IconWithText';


const SimpleModal = styled(BaseSimpleModal)`
  padding: 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
`

const OPTIONS = [
  {
    iconName: 'check',
    text: 'Полезный совет',
  },
  {
    iconName: 'cancel',
    text: 'Неправильный совет',
  },
  {
    iconName: 'no-eye',
    text: 'Не показывать больше этот совет',
  },
]

export const CardOptionsModal = ({ children }) =>
  <SimpleModal>
    {OPTIONS.map(option =>
      <IconWithText
        {...option}
        itemOffsetTop="22px"
        iconOffset="16px"
        textStyles="font-size: 16px; font-weight: 400; line-height: 1.2;"
      />
    )}
  </SimpleModal>
