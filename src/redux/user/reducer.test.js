import { userReducer } from './reducer'
import { setTokenPure, setUserInfo, getCategoriesSettingsSuccess, getSettingsSchemaSuccess } from './actions'


describe('userReducer', () => {
  let defaultUsersState

  beforeEach(() => {
    defaultUsersState = {
      fetching: true,
      oAuthToken: null,
      avatarUrl: '',
      login: '',
      settings: {
        schema: {},
        categories: [],
      },
    }
  })

  it('should save user token to state', () => {
    expect(userReducer(defaultUsersState, setTokenPure('user_token')).oAuthToken).toEqual('user_token')
  })

  it('should put user info to state', () => {
    const userInfo = {
      login: 'alice',
      avatarUrl: 'https://so.me/random/avatar.png',
    }
    expect(userReducer(defaultUsersState, setUserInfo(userInfo))).toEqual(expect.objectContaining(userInfo))
  })

  it('should put user settings and categories schema into state', () => {
    const schema = {
      health: {
        title: 'Здоровье',
        categories: {
          heart: 'Сердце',
          asthma: 'Астма',
          allergy: 'Аллергия',
        },
      },
    }
    const categories = [
      { name: 'heart', enabled: true, group: 'health' },
      { name: 'asthma', enabled: false, group: 'health' },
      { name: 'allergy', enabled: true, group: 'health' },
    ]

    expect(userReducer(
      userReducer(defaultUsersState, getSettingsSchemaSuccess(schema)),
      getCategoriesSettingsSuccess(categories))
    )
      .toEqual(expect.objectContaining({
        settings: {
          schema,
          categories,
        },
      }))
  })
})
