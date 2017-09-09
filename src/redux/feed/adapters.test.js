import { alertsAdapter } from './adapters'


describe('alertsAdapter', () => {
  const alerts = [{
    id: 1,
    text: 'Людям с заболеваниями сердца хорошо',
    code: 'heart_best_day_0',
  },
  {
    id: 2,
    text: 'Людям с астмой плохо',
    code: 'asthma_ok_day_1',
  },
  {
    id: 3,
    text: 'Очень плохая видимость на дороге',
    code: 'badVisibility_bad_day_0',
  }]
  it('should make correct card object out of server\'s alert object', () => {
    expect(alertsAdapter(alerts)).toEqual([expect.objectContaining({
      categoryGroup: 'health',
      category: 'heart',
      status: 'best',
      day: '0',
    }),
    expect.objectContaining({
      categoryGroup: 'health',
      category: 'asthma',
      status: 'ok',
      day: '1',
    }),
    expect.objectContaining({
      categoryGroup: 'motorists',
      category: 'badVisibility',
      status: 'bad',
      day: '0',
    })])
  })
})
