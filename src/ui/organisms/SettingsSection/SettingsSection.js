import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon, ScrollContainer } from 'ui/atoms'
import {
  categoryGroup,
  categoryGroupDisplayNames as categoryNames,
} from 'constants/categoryGroup'


const SectionWrapper = styled.section`
  margin-top: 8px;
  background-color: #f7f7f7;
`

const SectionHeadingWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`

const SectionHeadingText = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 16px;
`

const SectionScroll = styled(ScrollContainer) `
  padding: 24px 16px;

  &:after {
    content: '';
    flex: 0 0 8px;
    height: 8px;
  }
`

export const SettingsSection = ({ group, children }) => (
  <SectionWrapper>
    <SectionHeadingWrapper>
      <Icon name={`categories/${categoryGroup[group]}`} size={24} />
      <SectionHeadingText>{categoryNames[group]}</SectionHeadingText>
    </SectionHeadingWrapper>
    <SectionScroll>
      {children}
    </SectionScroll>
  </SectionWrapper>
)

SettingsSection.propTypes = {
  group: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
