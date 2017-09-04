import { createSelector } from 'reselect'

import { categoryGroupCategories } from 'constants/categoryGroup'


export const getFeedByFilters = createSelector(
  state => state.feed.list,
  state => state.filters,
  (feedList, filters) => {
    const activeFiltersList = filters.reduce((acc, filter) => {
      if (filter.active) {
        return acc.concat(categoryGroupCategories[filter.name])
      }
      return acc
    }, [])

    if (activeFiltersList.includes('all')) {
      return feedList
    }

    return feedList.reduce((acc, item) => {
      const cardsList = item.filter(({ code }) => {
        const [category] = code.split(/_/)
        return activeFiltersList.indexOf(category) >= 0
      })
      if (cardsList.length) {
        acc.push(cardsList)
      }
      return acc
    }, [])
  }
)
