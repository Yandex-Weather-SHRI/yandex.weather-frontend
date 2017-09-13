import { getNameOfSomeNextDay } from 'utils/days'
import { statuses } from 'constants/statuses'


export function getTabs(cardsList) {
  return cardsList.reduce((acc, item, index) => {
    if (index === 0) return acc

    return [...acc, {
      id: index,
      title: getNameOfSomeNextDay(index),
      alert: item.status === statuses.bad,
    }]
  }, [{ id: 0, title: 'Сегодня', alert: false }])
}
