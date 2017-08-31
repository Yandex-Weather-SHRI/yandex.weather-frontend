import { createReducer } from 'redux-act'

import { categoryGroup, categoryGroupDisplayNames } from 'constants/filters'

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
    name: categoryGroup.meteoaddicted,
    title: categoryGroupDisplayNames[categoryGroup.meteoaddicted],
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

function setFeedFilterReducer(state, { name, active }) {
  return state.map((filter) => {
    if (name === categoryGroup.all && filter.name !== categoryGroup.all) {
      return { ...filter, active: false }
    }
    else if (name !== categoryGroup.all && filter.name === categoryGroup.all) {
      const list = state.filter(f => f.name !== name && f.active)
      return { ...filter, active: list.length === 0 }
    }
    else if (name === categoryGroup.all) {
      return { ...filter, active: true }
    }
    else if (filter.name === name) {
      return { ...filter, active }
    }
    return filter
  })
}

export const filtersReducer = createReducer({
  [setFeedFilter]: setFeedFilterReducer,
}, filtersDefaultState)
