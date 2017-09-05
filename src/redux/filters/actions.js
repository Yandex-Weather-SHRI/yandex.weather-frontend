import { createAction } from 'redux-act'


export const setFeedFilter = createAction('feed.filter.set')
export const getAvailableFiltersSuccess = createAction('available.filters.get.success')

function findFilterInList(title, list) {
  return list.find(item => item.title === title)
}

export function getAvailableFilters() {
  return (dispatch, getState) => {
    const { user: { settings: { schema, categories } } } = getState()
    const filtersList = categories.reduce((acc, { enabled, group }) => {
      const { title } = schema[group]
      if (enabled && !findFilterInList(title, acc)) {
        return [...acc, { title, name: group, active: false }]
      }
      return acc
    }, [])

    dispatch(getAvailableFiltersSuccess(filtersList))
  }
}
