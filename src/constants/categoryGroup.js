import { meteoaddictedCategories } from './categories'

export const categoryGroups = [
  'all',
  'meteoaddicted',
  'allergy',
  'motorists',
  'ultraviolet',
]

export const categoryGroup = {
  all: 'all',
  meteoaddicted: 'meteoaddicted',
  allergy: 'allergy',
  motorists: 'motorists',
  ultraviolet: 'ultraviolet',
}

export const categoryGroupCategories = {
  [categoryGroup.all]: ['all'],
  [categoryGroup.meteoaddicted]: [
    meteoaddictedCategories.asthma,
    meteoaddictedCategories.heart,
    meteoaddictedCategories.joint,
    meteoaddictedCategories.skin,
  ],
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