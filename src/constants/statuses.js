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

export const statusWeight = {
  [statuses.best]: 0,
  [statuses.ok]: 1,
  [statuses.bad]: 2,
}
