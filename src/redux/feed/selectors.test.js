import { getFeedByFilters, getGroupedFeedListByCategory } from './selectors'


const list = [
  {
    categoryGroup: 'health',
    category: 'asthma',
    day: 0,
  },
  {
    categoryGroup: 'health',
    category: 'heart',
    day: 1,
  },
  {
    categoryGroup: 'motorists',
    category: 'badVisibility',
    day: 0,
  },
  {
    categoryGroup: 'health',
    category: 'asthma',
    day: 1,
  }]

describe('getFeedByFilters selector', () => {
  describe('when we have health filter enabled', () => {
    const filters = [{ name: 'health', active: true }, { name: 'motorists', active: false }]
    it('should return only health cards', () => {
      expect(getFeedByFilters(list, filters)).toHaveLength(3)
    })
  })
  describe('when we have all filters enabled', () => {
    const filters = [{ name: 'all', active: true }]
    it('should return all cards', () => {
      expect(getFeedByFilters(list, filters)).toHaveLength(4)
    })
  })
})

describe('getGroupedFeedListByCategory selector', () => {
  describe('should return an array of arrays', () => {
    it('should have one array with two asthma cards for different days', () => {
      expect(getGroupedFeedListByCategory(list))
        .toContainEqual([
          expect.objectContaining({
            category: 'asthma',
            day: 0,
          }),
          expect.objectContaining({
            category: 'asthma',
            day: 1,
          })])
    })
  })
})
