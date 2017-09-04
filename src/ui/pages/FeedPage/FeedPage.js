import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getFeed } from 'redux/feed/actions'
import { PageContent, PageLoader, AppBar, FeedFiltersList, FeedCardContainer } from 'ui/organisms'
import { IconButton } from 'ui/molecules'
import { getFeedByFilters } from 'redux/feed/selectors'
import { setFeedFilter } from 'redux/filters/actions'
import { categoryGroup } from 'constants/categoryGroup'
import { healthCategory } from 'constants/categories'
import { routeNames } from 'utils/routeNames'
import { openModal } from 'redux/modal/actions'


const MOCK_CARDS = [
  [
    {
      categoryGroup: categoryGroup.health,
      category: healthCategory.heart,
      text: 'Людям с заболеваниями сердца желательно уменьшить физическую активность',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 1,
    },
    {
      categoryGroup: categoryGroup.health,
      category: healthCategory.joint,
      text: 'Людям с заболеваниями суставов желательно уменьшить на них физическую нагрузку',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 2,
    },
  ],
  [
    {
      categoryGroup: categoryGroup.health,
      category: healthCategory.asthma,
      text: 'Большая влажность и сильный ветер. Для людей, болеющих астмой, рекомендуем выбрать спокойную деятельность',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 2,
    },
  ],
  [
    {
      categoryGroup: categoryGroup.health,
      category: healthCategory.joint,
      text: 'Людям с заболеваниями суставов желательно уменьшить на них физическую нагрузку',
      onShareClick: () => console.log('share!'),
      onOptionsClick: () => console.log('options!'),
      id: 2,
    },
  ],
]

const CardsContainer = styled.div`
  padding: 0 8px;
  flex: 1;
  margin-bottom: 16px;
`

class FeedPageContainer extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
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
    const { fetching, feed, filters } = this.props

    return (
      <PageContent>
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
        {fetching ? (
          <PageLoader />
        ) : (
          <div>
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
        )}
      </PageContent>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.feed.fetching,
    feed: getFeedByFilters(state),
    filters: state.filters,
  }
}

const mapDispatchToProps = {
  getFeed,
  setFeedFilter,
  openModal,
}

export const FeedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPageContainer)
