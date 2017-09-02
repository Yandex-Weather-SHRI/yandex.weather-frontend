import { createReducer } from 'redux-act'

import { categoryGroup, categoryGroupDisplayNames } from 'constants/categoryGroup'

import { setFeedFilter } from './actions'


const filtersDefaultState = [
  {
    name: categoryGroup.all,
    title: categoryGroupDisplayNames[categoryGroup.all],
    active: true,
  },
  {
    name: categoryGroup.allergy,
    title: categoryGroupDisplayNames[categoryGroup.allergy],
    active: false,
  },
  {
    name: categoryGroup.health,
    title: categoryGroupDisplayNames[categoryGroup.health],
    active: false,
  },
  {
    name: categoryGroup.motorists,
    title: categoryGroupDisplayNames[categoryGroup.motorists],
    active: false,
  },
  {
    name: categoryGroup.ultraviolet,
    title: categoryGroupDisplayNames[categoryGroup.ultraviolet],
    active: false,
  },
]

function isSelectedCurrentFilter(filter, name) {
  return filter.name === name
}

function isSelectedFilterAll(name, group) {
  return name === group.all
}

function isCurrentFilterAll(filter, group) {
  return filter.name === group.all
}

function getCurrentActiveFilters(filterList, name) {
  return filterList.filter(filter =>
    !isSelectedCurrentFilter(filter, name) && filter.active
  )
}

function setFeedFilterReducer(state, { name, active }) {
  return state.map((filter) => {
    if (
      !isCurrentFilterAll(filter, categoryGroup)
      && isSelectedFilterAll(name, categoryGroup)
    ) {
      return { ...filter, active: false }
    }
    else if (
      !isSelectedFilterAll(name, categoryGroup)
      && isCurrentFilterAll(filter, categoryGroup)
    ) {
      const activeFilters = getCurrentActiveFilters(state, name)
      const isActiveAll = activeFilters.length === 0
      return { ...filter, active: isActiveAll }
    }
    else if (isSelectedFilterAll(name, categoryGroup)) {
      return { ...filter, active: true }
    }
    else if (isSelectedCurrentFilter(filter, name)) {
      return { ...filter, active }
    }
    return filter
  })
}

export const filtersReducer = createReducer({
  [setFeedFilter]: setFeedFilterReducer,
}, filtersDefaultState)
