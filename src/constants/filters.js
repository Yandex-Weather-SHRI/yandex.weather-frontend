export const categoryGroup = {
  all: 'all',
  meteoaddicted: 'meteoaddicted',
  allergy: 'allergy',
  motorists: 'motorists',
  ultraviolet: 'ultraviolet',
}

export const categoryGroupCategories = {
  [categoryGroup.all]: ['all'],
  [categoryGroup.meteoaddicted]: ['heart', 'joint', 'asthma', 'skin'],
  [categoryGroup.allergy]: [],
  [categoryGroup.motorists]: [],
  [categoryGroup.ultraviolet]: [],
}

export const categoryGroupDisplayNames = {
  [categoryGroup.all]: 'Все',
  [categoryGroup.meteoaddicted]: 'Метеозависимость',
  [categoryGroup.allergy]: 'Аллергия',
  [categoryGroup.motorists]: 'Автомобилисты',
  [categoryGroup.ultraviolet]: 'Ультрафиолет',
}
