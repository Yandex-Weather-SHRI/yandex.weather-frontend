import { createSelector } from 'reselect'

import { categoryGroupCategories } from 'constants/categoryGroup'


export const getFeedByFilters = createSelector(
  state => state.feed.list,
  state => state.filters,
  (feed, filters) => {
    const activeFiltersList = filters.reduce((acc, filter) => {
      if (filter.active) {
        return acc.concat(categoryGroupCategories[filter.name])
      }
      return acc
    }, [])

    if (activeFiltersList.indexOf('all') >= 0) {
      return feed
    }

    return feed.filter(({ code }) => {
      const [category] = code.split(/_/)
      return activeFiltersList.indexOf(category) >= 0
    })
  }
)
