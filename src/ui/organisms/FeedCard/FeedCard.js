import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { IconButton } from 'ui/molecules'
import { healthCategory } from 'constants/categories'
import { statusDisplayNames, getStatusDisplayMessage } from 'constants/statuses'
import { getStatusStyles } from 'styles/utils'

import { FeedCardMetaHeart, FeedCardMetaAsthma, FeedCardMetaJoint } from './metas'
import { Icon } from '../../atoms/Icon/Icon'
import { FeedCardMetaHead } from './metas/FeedCardMetaHead'


const feedMetaComponents = {
  [healthCategory.heart]: FeedCardMetaHeart,
  [healthCategory.joint]: FeedCardMetaJoint,
  [healthCategory.asthma]: FeedCardMetaAsthma,
  [healthCategory.head]: FeedCardMetaHead,
}

const Container = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  min-height: 218px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px 0 16px;
  height: 48px;
`

const Heading = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  ${p => p.textColor && css`
    color: ${p.textColor};
  `}

  &:first-child:before {
    content: none;
  }

  &:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #d8d8d8;
    margin: 0 10px;
  }
`

const Content = styled.div`
  padding: 8px 16px 20px;
`

const Actions = styled.div`
  display: flex;
  margin-left: auto;
`

const Button = styled(IconButton)`
  & + & {
    margin-left: 8px;
  }
`

const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 14px;
`

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  height: 24px;
  border-radius: 4px;
  padding: 0 12px;
  font-size: 1.2rem;
  color: #fff;
  ${p => getStatusStyles(p.status)}
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MetaText = styled.div`
  font-size: 1.2rem;
  color: rgba(102, 102, 102, 0.7);
  margin-left: 32px;
`

export const FeedCard = ({
  groupTitle,
  categoryTitle,
  category,
  text,
  onShareClick,
  onOptionsClick,
  status,
}) => {
  const Meta = feedMetaComponents[category]

  return (
    <Container>
      <Header>
        <Heading textColor="#000">
          {groupTitle}
        </Heading>
        <Heading textColor="#999">
          {categoryTitle}
        </Heading>
        <Actions>
          <Button icon="share" onClick={onShareClick} />
          <Button icon="more" onClick={onOptionsClick} />
        </Actions>
      </Header>
      <Content>
        <Row>
          <div>
            <Text>
              {text}
            </Text>
            <Status {...{ status }}>
              {statusDisplayNames[status]}
            </Status>
          </div>
          <div>
            <Icon
              name={`categories/${category}/${status}`}
              size={100}
            />
          </div>
        </Row>
        {Meta && <Meta />}
        <MetaText>
          {getStatusDisplayMessage(category, status)}
        </MetaText>
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
  status: PropTypes.string.isRequired,
}
