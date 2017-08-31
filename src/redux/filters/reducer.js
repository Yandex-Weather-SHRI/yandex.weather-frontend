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
    if (name === 'all' && filter.name !== 'all') {
      return { ...filter, active: false }
    }
    else if (name !== 'all' && filter.name === 'all') {
      return { ...filter, active: false }
    }
    else if (name === 'all') {
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
