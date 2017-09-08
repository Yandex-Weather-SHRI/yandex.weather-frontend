import { categoryGroupCategories } from 'constants/categoryGroup'


function getCategoryGroup(category) {
  return Object.keys(categoryGroupCategories).reduce((acc, key) => {
    if (categoryGroupCategories[key].includes(category)) {
      return key
    }
    return acc
  }, null)
}

export function alertsAdapter(alertsList) {
  return alertsList.map((item) => {
    const [category, status,, day] = item.code.split(/_/)
    const categoryGroup = getCategoryGroup(category)
    return { ...item, category, categoryGroup, status, day }
  })
}
