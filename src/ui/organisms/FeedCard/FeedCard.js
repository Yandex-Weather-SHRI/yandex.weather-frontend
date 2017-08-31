import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'ui/molecules/IconButton/IconButton'

const Container = styled.div`
  padding: 18px 16px 29px;
  border-radius: 4px;
  background-image: linear-gradient(170deg, #30cfd0, #330867);
  box-shadow: 0 2px 10px 0 rgba(50, 71, 136, 0.12), 0 2px 17px 0 rgba(49, 135, 170, 0.42);
  color: white;
  
  & + & {
    margin-top: 16px;
  }
`

const Header = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderButtons = styled.div`
  display: flex;
`

const CategoryGroupName = styled.div`
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`

const CategoryName = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.1px; 
  margin-bottom: 16px;
`

const Text = styled.div`
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.2;
`

export const FeedCard = ({ categoryGroupName, categoryName, text, onShareClick, onOptionsClick }) =>
  <Container>
    <Header>
      <CategoryGroupName>
        {categoryGroupName}
      </CategoryGroupName>
      <HeaderButtons>
        <IconButton icon="share" style={{ marginRight: 16 }} onClick={onShareClick} />
        <IconButton icon="more" onClick={onOptionsClick} />
      </HeaderButtons>
    </Header>
    <CategoryName>
      {categoryName}
    </CategoryName>
    <Text>
      {text}
    </Text>
  </Container>

FeedCard.propTypes = {
  categoryGroupName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onShareClick: PropTypes.func.isRequired,
  onOptionsClick: PropTypes.func.isRequired,
}
