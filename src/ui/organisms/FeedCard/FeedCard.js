import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'ui/atoms'
import { IconButton } from 'ui/molecules'
import { categoryGroupDisplayNames, categoryGroups } from 'constants/categoryGroup'
import { healthCategory, categories, categoriesDisplayNames } from 'constants/categories'

import { FeedCardMetaHeart, FeedCardMetaAsthma, FeedCardMetaJoint } from './metas'


const feedMetaComponents = {
  [healthCategory.heart]: FeedCardMetaHeart,
  [healthCategory.joint]: FeedCardMetaJoint,
  [healthCategory.asthma]: FeedCardMetaAsthma,
}

const Container = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  min-height: 218px;
`

const CategoryPicture = styled(Icon)`
  content: '';
  position: absolute;
  z-index: -1;
  right: 0;
  top: 56px;
  bottom: 0;
  margin: auto;
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

export const FeedCard = ({ categoryGroup, category, text, onShareClick, onOptionsClick }) => {
  const FeedMeta = feedMetaComponents[category]

  return (
    <Container {...{ categoryGroup }}>
      <CategoryPicture
        name={`categories/${category}`}
        size={160}
      />
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
        {FeedMeta && <FeedMeta />}
      </Content>
    </Container>
  )
}

FeedCard.propTypes = {
  categoryGroup: PropTypes.oneOf(categoryGroups).isRequired,
  category: PropTypes.oneOf(categories).isRequired,
  text: PropTypes.string.isRequired,
  onShareClick: PropTypes.func.isRequired,
  onOptionsClick: PropTypes.func.isRequired,
}
