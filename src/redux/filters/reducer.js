import { createReducer } from 'redux-act'

import { setFeedFilter, getAvailableFiltersSuccess } from './actions'


const filtersDefaultState = [
  {
    name: 'all',
    title: 'Все',
    active: true,
  },
]

function isSelectedCurrentFilter(filter, name) {
  return filter.name === name
}

function isSelectedFilterAll(name) {
  return name === 'all'
}

function isCurrentFilterAll(filter) {
  return filter.name === 'all'
}

function getCurrentActiveFilters(filterList, name) {
  return filterList.filter(filter =>
    !isSelectedCurrentFilter(filter, name) && filter.active
  )
}

function setFeedFilterReducer(state, { name, active }) {
  return state.map((filter) => {
    if (
      !isCurrentFilterAll(filter)
      && isSelectedFilterAll(name)
    ) {
      return { ...filter, active: false }
    }
    else if (
      !isSelectedFilterAll(name)
      && isCurrentFilterAll(filter)
    ) {
      const activeFilters = getCurrentActiveFilters(state, name)
      const isActiveAll = activeFilters.length === 0
      return { ...filter, active: isActiveAll }
    }
    else if (isSelectedFilterAll(name)) {
      return { ...filter, active: true }
    }
    else if (isSelectedCurrentFilter(filter, name)) {
      return { ...filter, active }
    }
    return filter
  })
}

export const filtersReducer = createReducer({
  [setFeedFilter](state, payload) {
    return setFeedFilterReducer(state, payload)
  },

  [getAvailableFiltersSuccess](state, payload) {
    return [...filtersDefaultState, ...payload]
  },
}, filtersDefaultState)
