import { categoryGroupCategories } from 'constants/categoryGroup'


function getCategoryGroup(category) {
  return Object.keys(categoryGroupCategories).reduce((acc, key) => {
    if (categoryGroupCategories[key].includes(category)) {
      return key
    }
    return acc
  }, null)
}

export function alertsAdapter(alerts) {
  const alertsMap = alerts.reduce((acc, item) => {
    const [category,,, day] = item.code.split(/_/)
    const categoryGroup = getCategoryGroup(category)
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category][day] = { ...item, category, categoryGroup }
    return acc
  }, {})

  return Object.keys(alertsMap).reduce((acc, key) => {
    acc.push(alertsMap[key].filter(Boolean))
    return acc
  }, [])
}
