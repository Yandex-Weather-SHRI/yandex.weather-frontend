import { createSelector } from 'reselect'


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
<<<<<<< HEAD
  feedList => feedList.sort((a, b) =>
    statusWeight[b[0].status] - statusWeight[a[0].status]
  )
=======
  feedList => feedList.sort((a, b) => b[0].weight - a[0].weight)
>>>>>>> 14833a7cdc3685b6dc1b6871b343b4c63d4a2d64
)
