import { filtersReducer } from './reducer'
import { setFeedFilter, getAvailableFiltersSuccess } from './actions'


const state = [
  {
    name: 'all',
    title: 'Все',
    active: true,
  },
]

describe('filtersReducer', () => {
  it('should put filter to state', () => {
    const action = getAvailableFiltersSuccess([{
      name: 'health',
      title: 'Здоровье',
      active: false,
    }])

    expect(filtersReducer(state, action))
      .toEqual(expect.arrayContaining([expect.objectContaining({ name: 'health' }), state[0]]))
  })
})
