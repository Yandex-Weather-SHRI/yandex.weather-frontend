import { filtersReducer } from './reducer'
import { getAvailableFiltersSuccess } from './actions'


describe('filtersReducer', () => {
  let state
  beforeEach(() => {
    state = [
      {
        name: 'all',
        title: 'Все',
        active: true,
      },
    ]
  })

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
