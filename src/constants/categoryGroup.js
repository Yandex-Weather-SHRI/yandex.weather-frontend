import { healthCategory } from './categories'


export const categoryGroup = {
  all: 'all',
  health: 'health',
  motorists: 'motorists',
}

export const categoryGroups = Object.keys(categoryGroup)

export const categoryGroupCategories = {
  [categoryGroup.all]: ['all'],
  [categoryGroup.health]: [
    healthCategory.asthma,
    healthCategory.heart,
    healthCategory.joint,
    healthCategory.skin,
    healthCategory.allergy,
    healthCategory.ultraviolet,
  ],
  [categoryGroup.motorists]: [],
  [categoryGroup.ultraviolet]: [],
}

export const categoryGroupDisplayNames = {
  [categoryGroup.all]: 'Все',
  [categoryGroup.health]: 'Здоровье',
  [categoryGroup.motorists]: 'Автомобилисты',
}
