import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'ui/atoms'
import {
  categoryGroup,
  categoryGroupDisplayNames as categoryNames,
} from 'constants/categoryGroup'


const SectionHeadingWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`

const SectionHeadingText = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 16px;
`

const SectionChildrenWrapper = styled.div`
  background-color: #f7f7f7;
`

const SectionHeading = ({ icon, text }) => (
  <SectionHeadingWrapper>
    <Icon name={icon} size={24} />
    <SectionHeadingText>{text}</SectionHeadingText>
  </SectionHeadingWrapper>
)

export const SettingsSection = ({ category, children }) => (
  <section>
    <SectionHeading icon={`categories/${categoryGroup[category]}`} text={categoryNames[category]} />
    <SectionChildrenWrapper>
      {children}
    </SectionChildrenWrapper>
  </section>
)

SettingsSection.propTypes = {
  category: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

SectionHeading.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
