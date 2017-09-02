
export const healthCategory = {
  heart: 'heart',
  joint: 'joint',
  asthma: 'asthma',
  skin: 'skin',
  allergy: 'allergy',
  ultraviolet: 'ultraviolet',
}

export const healthCategories = Object.keys(healthCategory)

export const categoriesDisplayNames = {
  [healthCategory.heart]: 'Сердце',
  [healthCategory.joint]: 'Суставы',
  [healthCategory.asthma]: 'Астма',
  [healthCategory.skin]: 'Кожа',
  [healthCategory.allergy]: 'Аллергия',
  [healthCategory.ultraviolet]: 'Ультрафиолет',
}

export const categoriesAdvicesCount = {
  [healthCategory.heart]: '3 совета',
  [healthCategory.joint]: '2 совета',
  [healthCategory.asthma]: '2 совета',
  [healthCategory.skin]: '3 совета',
  [healthCategory.allergy]: '3 совета',
  [healthCategory.ultraviolet]: '2 совета',
}

export const categories = [
  ...healthCategories,
]
