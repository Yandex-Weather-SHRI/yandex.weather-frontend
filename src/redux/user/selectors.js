import { createSelector } from 'reselect'


export const getNormalizedSettings = createSelector(
  state => state.user.settings.categories,
  settings => settings.reduce((acc, item) => {
    acc[item.name] = item
    return acc
  }, {})
)
