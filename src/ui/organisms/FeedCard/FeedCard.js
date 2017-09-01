import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton } from 'ui/molecules'
import {
  categoryGroupDisplayNames,
  categoryGroups,
  categoryGroup as categoryGroupDict,
} from 'constants/categoryGroup'
import { categories, categoriesDisplayNames } from 'constants/categories'


const DEFAULT_CARD_GRADIENT = 'linear-gradient(170deg, #30cfd0, #330867)'

const cardGradient = {
  [categoryGroupDict.meteoaddicted]: DEFAULT_CARD_GRADIENT,
}

const Container = styled.div`
  border-radius: 4px;
  background-image: ${({ categoryGroup }) => cardGradient[categoryGroup]};
  box-shadow: 0 2px 10px 0 rgba(50, 71, 136, 0.12), 0 2px 17px 0 rgba(49, 135, 170, 0.42);
  color: #fff;

  & + & {
    margin-top: 16px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 48px;
`

const Content = styled.div`
  padding: 8px 16px 20px;
`

const HeaderButtons = styled.div`
  display: flex;
`

const HeaderButton = styled(IconButton)`
  & + & {
    margin-left: 16px;
  }
`

const CategoryGroupName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`

const CategoryName = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  letter-spacing: 1.1px;
  margin-bottom: 16px;
`

const Text = styled.div`
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.2;
`

export const FeedCard = ({ categoryGroup, category, text, onShareClick, onOptionsClick }) =>
  <Container {...{ categoryGroup }}>
    <Header>
      <CategoryGroupName>
        {categoryGroupDisplayNames[categoryGroup] || 'Совет'}
      </CategoryGroupName>
      <HeaderButtons>
        <HeaderButton icon="share" onClick={onShareClick} />
        <HeaderButton icon="more" onClick={onOptionsClick} />
      </HeaderButtons>
    </Header>
    <Content>
      <CategoryName>
        {categoriesDisplayNames[category]}
      </CategoryName>
      <Text>
        {text}
      </Text>
    </Content>
  </Container>

FeedCard.propTypes = {
  categoryGroup: PropTypes.oneOf(categoryGroups).isRequired,
  category: PropTypes.oneOf(categories).isRequired,
  text: PropTypes.string.isRequired,
  onShareClick: PropTypes.func.isRequired,
  onOptionsClick: PropTypes.func.isRequired,
}
