import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getFeed } from 'redux/feed/actions'
import { AppBar, FeedFiltersList, FeedCardContainer } from 'ui/organisms'
import { IconButton } from 'ui/molecules'
import { getFeedByFilters } from 'redux/feed/selectors'
import { setFeedFilter } from 'redux/filters/actions'
import { categoryGroup } from 'constants/categoryGroup'
import { categories, meteoaddictedCategory } from 'constants/categories'
import { Link } from 'react-router-dom'
import { routeNames } from 'utils/routeNames'


const MOCK_CARDS = [
  [
    {
      categoryGroup: categoryGroup.meteoaddicted,
      category: meteoaddictedCategory.heart,
      text: 'Людям с заболеваниями сердца желательно уменьшить физическую активность',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 1,
    },
    {
      categoryGroup: categoryGroup.meteoaddicted,
      category: meteoaddictedCategory.joint,
      text: 'lorem',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 2,
    },
  ],
  [
    {
      categoryGroup: categoryGroup.meteoaddicted,
      category: meteoaddictedCategory.asthma,
      text: 'Для людей с заболеванием астмы рекомендуем выбрать спокойную деятельность',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 2,
    },
  ],
]

const CardsContainer = styled.div`
  padding: 0 8px;
  flex: 1;
`

class FeedPageContainer extends Component {
  static propTypes = {
    feed: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getFeed: PropTypes.func.isRequired,
    setFeedFilter: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getFeed()
  }

  setFeedFilter = (name, active) => () => {
    this.props.setFeedFilter({ name, active })
  }

  render() {
    const { feed, filters } = this.props

    return (
      <div style={{ width: '100%' }}>
        <AppBar
          title="Советы"
          elementLeft={
            <Link to={routeNames.index}>
              <IconButton icon="arrow-left" size="24" />
            </Link>
          }
          elementRight={
            <Link to={routeNames.settings}>
              <IconButton icon="settings" size="24" />
            </Link>
          }
        />
        <FeedFiltersList
          list={filters}
          setFeedFilter={this.setFeedFilter}
        />
        <CardsContainer>
          {MOCK_CARDS.map((cardsList, key) => (
            <FeedCardContainer {...{ cardsList, key }} />
          ))}
        </CardsContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    feed: getFeedByFilters(state),
    filters: state.filters,
  }
}

const mapDispatchToProps = {
  getFeed,
  setFeedFilter,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
