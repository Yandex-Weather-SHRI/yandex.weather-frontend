import { feedReducer } from './reducer'
import { feedGetRequest, feedGetSuccess } from './actions'


describe('feedReducer', () => {
  let state
  let list

  beforeAll(() => {
    state = {
      fetching: false,
      list: [],
    }
  })

  it('should set state\'s fetching prop to true', () => {
    expect(feedReducer(state, feedGetRequest())).toEqual(expect.objectContaining({ fetching: true }))
  })

  it('should push a list to the state', () => {
    list = [{
      id: 2,
      text: 'Людям с заболеваниями сердца желательно уменьшить физическую активность',
      text_short: '',
      provider: '',
      image_url: '',
      source_url: '',
      push: false,
      code: 'heart_bad_day_1',
      significance: '',
      category: 'heart',
      categoryGroup: 'health',
      status: 'bad',
      day: '1',
    }]
    expect(feedReducer(state, feedGetSuccess(list))).toEqual({ fetching: false, list })
  })
})
