import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Icon } from 'ui/atoms'
import { IconButton } from 'ui/molecules'
import { statusDisplayNames, metasCollection } from 'constants/statuses'
import { getStatusStyles } from 'styles/utils'


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
  ${p => p.isOnBoarding && css`
    padding-right: 16px;
  `}
`

const Heading = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;
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

const HeaderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  flex: 1 1 auto;
  margin-right: 8px;

  &:after {
    content: '';
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
    position: absolute;
    right: 0;
    width: 24px;
    height: 100%;
    pointer-events: none;
  }
`

const Content = styled.div`
  padding: 8px 16px 20px;
`

const Actions = styled.div`
  display: flex;
  flex: 0 0 auto;
`

const Button = styled(IconButton)`
  transition: opacity 150ms ease-in-out;
  width: 40px;
  height: 48px;
  padding: 0;

  span {
    justify-content: flex-end;
  }

  &:active {
    opacity: 0.5;
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
  line-height: 24px;
  color: #fff;
  user-select: none;
  ${p => getStatusStyles(p.status)}
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Meta = styled.div`
  margin-top: 24px;
`

const MetaWrapper = styled.div`
  display: flex;
`

const MetaSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  &:last-of-type {
    margin-right: 0;
  }
`

const MetaIcon = styled(Icon)`
  margin-right: 8px;
`

export const MetaText = styled.span`
  font-size: ${p => p.textSize || 2.8}rem;
  line-height: 1.24;
  letter-spacing: 0.8px;
  margin-right: 8px;
  color: #000;

  &:last-of-type {
    margin-right: 0;
  }
`

const MetaMessage = styled.div`
  font-size: 1.2rem;
  line-height: 1.2;
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
  isOnBoarding,
  categoryGroup,
}) => {
  const meta = metasCollection[category]

  return (
    <Container>
      <Header isOnBoarding={isOnBoarding}>
        <HeaderWrapper>
          <Heading textColor="#000">
            {groupTitle}
          </Heading>
          <Heading textColor="#999">
            {categoryTitle}
          </Heading>
        </HeaderWrapper>
        {isOnBoarding ? (
          <Icon name={`categoryGroups/${categoryGroup}`} />
        ) : (
          <Actions>
            <Button icon="share" onClick={onShareClick} data-hint="share" />
            <Button icon="more" onClick={onOptionsClick} />
          </Actions>
        )}
      </Header>
      <Content>
        <ContentWrapper>
          <div>
            <Text>
              {text}
            </Text>
            <Status {...{ status }}>
              {statusDisplayNames[status]}
            </Status>
          </div>
          <Icon name={`categories/${category}/${status}`} size={100} />
        </ContentWrapper>
        {meta && (
          <Meta>
            <MetaWrapper>
              {meta.sections.map(section => (
                <MetaSection key={section.icon}>
                  <MetaIcon name={`weather-conditions/${section.icon}`} size={24} />
                  <MetaText>{section.values[status]}</MetaText>
                </MetaSection>
              ))}
            </MetaWrapper>
            <MetaMessage>{meta.messages[status]}</MetaMessage>
          </Meta>
        )}
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
  isOnBoarding: PropTypes.bool,
  categoryGroup: PropTypes.string,
}

FeedCard.defaultProps = {
  isOnBoarding: false,
  categoryGroup: '',
}
