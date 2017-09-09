import { createSelector } from 'reselect'

import { categoryGroupCategories } from 'constants/categoryGroup'
import { statusWeight } from 'constants/statuses'


function getActiveFiltersList(filtersList) {
  return filtersList.reduce((acc, filter) => {
    if (filter.active) {
      return acc.concat(filter.name)
    }
    return acc
  }, [])
}

export const getFeedByFilters = createSelector(
  feedList => feedList,
  (feedList, filters) => filters,
  (feedList, filters) => {
    const activeFiltersList = getActiveFiltersList(filters)

    if (activeFiltersList.includes('all')) {
      return feedList
    }

    return feedList.filter(item =>
      activeFiltersList.includes(item.categoryGroup)
    )
  }
)

export const getGroupedFeedListByCategory = createSelector(
  feedList => feedList,
  (feedList) => {
    if (!feedList.length) {
      return feedList
    }

    const feedMap = feedList.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category][item.day] = item
      return acc
    }, {})

    return Object.keys(feedMap).reduce((acc, key) => (
      [...acc, feedMap[key].filter(Boolean)]
    ), [])
  }
)

export const sortByStatus = createSelector(
  feedList => feedList,
  feedList => feedList.sort((a, b) =>
    statusWeight[b.status] - statusWeight[a.status]
  )
)
