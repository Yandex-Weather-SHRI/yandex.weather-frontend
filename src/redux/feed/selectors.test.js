import { getFeedByFilters } from './selectors'


describe('getFeedByFilters selector', () => {
  const list = [{ categoryGroup: 'health' }, { categoryGroup: 'health' }, { categoryGroup: 'motorists' }]
  const filters = [{ name: 'health', active: true }, { name: 'motorists', active: false }]
  describe('when we have health filter enabled', () => {
    it('should return only health cards', () => {
      expect(getFeedByFilters(list, filters)).toHaveLength(2)
    })
  })
})
