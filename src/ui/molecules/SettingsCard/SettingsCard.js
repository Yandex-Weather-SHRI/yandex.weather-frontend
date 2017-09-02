import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'ui/atoms'
import { getCategoryGroupStyle } from 'styles/utils'


const SettingsCardWrapper = styled.div`
  ${getCategoryGroupStyle}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  border-radius: 4px;
  min-width: 144px;
  height: 112px;
  margin-right: 8px;
`

const SettingsCardName = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
`

const SettingsCardAdvices = styled.p`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
`

const SettingsCardContent = styled.div`
  display: flex;
  flex-direction: column;
`

const SettingsCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Line = styled.div`
  width: 56px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
`


export const SettingsCard = ({ group, catName, catAdvices, onClick, checked }) => (
  <SettingsCardWrapper name={group} onClick={onClick}>
    <SettingsCardTop>
      <Line />
      <Icon name={`settings_${checked}`} size={24} />
    </SettingsCardTop>
    <SettingsCardContent>
      <SettingsCardName>{catName}</SettingsCardName>
      <SettingsCardAdvices>{catAdvices}</SettingsCardAdvices>
    </SettingsCardContent>
  </SettingsCardWrapper>
)

SettingsCard.propTypes = {
  group: PropTypes.string.isRequired,
  catName: PropTypes.string.isRequired,
  catAdvices: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

SettingsCard.defaultProps = {
  checked: false,
  catAdvices: '1 совет',
}
