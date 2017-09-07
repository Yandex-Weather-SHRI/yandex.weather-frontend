import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'

import { getFullDocumentTitle } from 'utils/title'


export const PageTitle = ({ title, children }) => (
  <DocumentTitle title={getFullDocumentTitle(title)}>
    {children}
  </DocumentTitle>
)

PageTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

PageTitle.defaultProps = {
  title: null,
  children: null,
}
