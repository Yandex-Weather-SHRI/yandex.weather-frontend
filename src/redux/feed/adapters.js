function getCategoryGroup(category, schema) {
  /* eslint-disable no-restricted-syntax */
  for (const groupName of Object.keys(schema)) {
    const categories = Object.keys(schema[groupName].categories)
    if (categories.includes(category)) {
      return groupName
    }
  }
  return null
}

export function alertsAdapter(alertsList, schema) {
  return alertsList.map((item) => {
    const [category, status,, day] = item.code.split(/_/)
    const categoryGroup = getCategoryGroup(category, schema)
    return { ...item, category, categoryGroup, status, day }
  })
}
