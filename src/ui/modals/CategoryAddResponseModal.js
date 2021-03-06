import React from 'react'
import PropTypes from 'prop-types'

import { withModalAutoClose } from 'hocs'
import { ModalMessage } from 'ui/atoms'
import { questionWords } from 'constants/questionWords'

import { SimpleModal } from './base/SimpleModal'


const CategoryAddResponseModalInner = ({ meta: { category } }) =>
  <SimpleModal>
    <ModalMessage
      content={`Карточка с советами про ${questionWords[category] || 'новую категорию'} была добавлена в вашу ленту`}
    />
  </SimpleModal>

CategoryAddResponseModalInner.propTypes = {
  meta: PropTypes.shape({}).isRequired,
}

export const CategoryAddResponseModal = withModalAutoClose(CategoryAddResponseModalInner)

