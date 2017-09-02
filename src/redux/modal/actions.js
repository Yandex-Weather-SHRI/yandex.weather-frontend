import { createAction } from 'redux-act'

export const openModal = createAction('modal.open', (modalId, meta) => ({ modalId, meta }))
export const closeModal = createAction('modal.close')
