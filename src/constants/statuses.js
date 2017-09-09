import { healthCategory } from './categories'

export const statuses = {
  best: 'best',
  ok: 'ok',
  bad: 'bad',
}

export const statusDisplayNames = {
  [statuses.best]: 'Благоприятно',
  [statuses.ok]: 'Нормально',
  [statuses.bad]: 'Неблагоприятно',
}

export const statusDisplayMessage = {
  [healthCategory.heart]: {
    [statuses.best]: 'Небольшие возмущения',
    [statuses.ok]: 'Умеренная геомагнитная буря',
    [statuses.bad]: 'Жесткий геомагнитный шторм',
  },
  [healthCategory.head]: {
    [statuses.best]: 'Не ожидается резких перепадов давления',
    [statuses.bad]: 'Ожидается резкий перепад давления',
  },
  [healthCategory.asthma]: {
    [statuses.best]: 'Большая влажность и сильный ветер',
    [statuses.bad]: 'Небольшая влажность и слабый ветер',
  },
  [healthCategory.joint]: {
    [statuses.best]: 'Большая влажность и перепады температуры',
    [statuses.bad]: 'Небольшая влажность и перепады температуры',
  },
}

export function getStatusDisplayMessage(category, status) {
  const message = statusDisplayMessage[category] && statusDisplayMessage[category][status]
  return message || ''
}

export const statusWeight = {
  [statuses.best]: 0,
  [statuses.ok]: 1,
  [statuses.bad]: 2,
}
