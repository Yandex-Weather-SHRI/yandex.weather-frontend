import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton, CardPicture } from 'ui/molecules'
import { healthCategory } from 'constants/categories'

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

const FeedCardPicture = styled(CardPicture)`
  top: 56px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 16px;
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
    margin-left: 8px;
  }
`

const CategoryGroupName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.8px;
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

export const FeedCard = ({
  groupTitle,
  categoryTitle,
  category,
  text,
  onShareClick,
  onOptionsClick,
}) => {
  const FeedMeta = feedMetaComponents[category]

  return (
    <Container>
      <FeedCardPicture
        name={`categories/${category}`}
        size={160}
      />
      <Header>
        <CategoryGroupName>
          {groupTitle}
        </CategoryGroupName>
        <HeaderButtons>
          <HeaderButton icon="share" onClick={onShareClick} />
          <HeaderButton icon="more" onClick={onOptionsClick} />
        </HeaderButtons>
      </Header>
      <Content>
        <CategoryName>
          {categoryTitle}
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
  groupTitle: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onShareClick: PropTypes.func.isRequired,
  onOptionsClick: PropTypes.func.isRequired,
}
