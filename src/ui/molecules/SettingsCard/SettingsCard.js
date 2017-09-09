import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from 'ui/atoms'
import { CardPicture } from 'ui/molecules'
import { getCategoryGroupStyle } from 'styles/utils'


const Container = styled.div`
  ${p => getCategoryGroupStyle({ name: p.groupName })}
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 12px 10px;
  border-radius: 4px;
  width: 144px;
  height: 112px;
  margin-right: 8px;
  user-select: none;

  &:last-of-type {
    margin-right: 0;
  }
`

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
`

const Advices = styled.div`
  margin-top: 8px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.1px;
  color: rgba(255, 255, 255, 0.7);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Line = styled.span`
  width: 56px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
`

const statusIcons = {
  true: 'check-circle',
  false: 'add-circle',
}

export const SettingsCard = ({
  groupName,
  categoryName,
  categoryTitle,
  advicesCount,
  onClick,
  checked,
}) => (
  <Container groupName={groupName} onClick={onClick}>
    <Heading>
      <Line />
      <Icon name={statusIcons[checked]} size={24} />
    </Heading>
    <Content>
      <Name>{categoryTitle}</Name>
      <Advices>{advicesCount}</Advices>
    </Content>
  </Container>
)

SettingsCard.propTypes = {
  groupName: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  advicesCount: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

SettingsCard.defaultProps = {
  checked: false,
  advicesCount: '1 совет',
}
