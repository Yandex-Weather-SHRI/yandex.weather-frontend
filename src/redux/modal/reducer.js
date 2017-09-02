import { createReducer } from 'redux-act'

import * as actions from './actions'


const defaultModalState = {
  openedModal: '',
  meta: {},
}

export const modalReducer = createReducer({
  [actions.openModal]: (state, { modalId, meta }) => ({ ...state, openedModal: modalId, meta }),
  [actions.closeModal]: state => ({ ...state, openedModal: '' }),
}, defaultModalState)
