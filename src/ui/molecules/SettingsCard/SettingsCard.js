import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'ui/atoms'


const Container = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 12px 12px;
  border-radius: 4px;
  width: 144px;
  height: 112px;
  margin-right: 8px;
  user-select: none;
  background-color: #fff;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.03);
  transition: opacity 150ms ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  &:active {
    opacity: 0.75;
  }
`

const StatusIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;

  &:before,
  &:after {
    content: '';
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  &:before {
    border: 2px solid ${p => p.checked ? '#ff6f33' : '#808080'};
    transition: border-color 150ms ease-in-out;
  }

  &:after {
    background-image: linear-gradient(315deg, #ed515f, #ff6f33);
    transition:
      transform 150ms ease-in-out,
      opacity 150ms ease-in-out;
    ${p => !p.checked && css`
      transform: scale(0);
      opacity: 0;
    `}
  }
`

const Title = styled.div`
  margin-top: auto;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
`

export const SettingsCard = ({
  categoryName,
  categoryTitle,
  onClick,
  checked,
}) => (
  <Container onClick={onClick}>
    <StatusIcon
      name="add"
      checked={checked}
      size={24}
      fill={checked ? '#fff' : '#808080'}
    />
    <Icon
      name={`categories/${categoryName}/default`}
      size={48}
    />
    <Title>{categoryTitle}</Title>
  </Container>
)

SettingsCard.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}
