
export const healthCategory = {
  heart: 'heart',
  joint: 'joint',
  asthma: 'asthma',
  skin: 'skin',
  allergy: 'allergy',
  ultraviolet: 'ultraviolet',
}

export const motoristCategory = {
  badSight: 'badSight',
  washCar: 'washCar',
  ice: 'ice',
}

export const healthCategories = Object.keys(healthCategory)
export const motoristCategories = Object.keys(motoristCategory)

export const categoriesDisplayNames = {
  [healthCategory.heart]: 'Сердце',
  [healthCategory.joint]: 'Суставы',
  [healthCategory.asthma]: 'Астма',
  [healthCategory.skin]: 'Кожа',
  [healthCategory.allergy]: 'Аллергия',
  [healthCategory.ultraviolet]: 'Ультрафиолет',
  [motoristCategory.badSight]: 'Плохая видимость',
  [motoristCategory.washCar]: 'Помыть машину',
  [motoristCategory.ice]: 'Гололёд',
}

export const categoriesAdvicesCount = {
  [healthCategory.heart]: '3 совета',
  [healthCategory.joint]: '2 совета',
  [healthCategory.asthma]: '2 совета',
  [healthCategory.skin]: '3 совета',
  [healthCategory.allergy]: '3 совета',
  [healthCategory.ultraviolet]: '2 совета',
  [motoristCategory.badSight]: '4 совета',
  [motoristCategory.washCar]: '2 совета',
  [motoristCategory.ice]: '8 советов',
}

export const categories = [
  ...healthCategories,
  ...motoristCategories,
]
