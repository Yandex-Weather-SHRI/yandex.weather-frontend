import { healthCategories, motoristCategories } from './categories'


export const categoryGroup = {
  all: 'all',
  health: 'health',
  motorists: 'motorists',
}

export const categoryGroups = Object.keys(categoryGroup)

export const categoryGroupCategories = {
  [categoryGroup.all]: ['all'],
  [categoryGroup.health]: [
    ...healthCategories,
  ],
  [categoryGroup.motorists]: [
    ...motoristCategories,
  ],
  [categoryGroup.ultraviolet]: [],
}

export const categoryGroupDisplayNames = {
  [categoryGroup.all]: 'Все',
  [categoryGroup.health]: 'Здоровье',
  [categoryGroup.motorists]: 'Автомобилисты',
}
