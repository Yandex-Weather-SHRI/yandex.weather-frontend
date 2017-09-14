import React from 'react'
import { PropTypes } from 'prop-types'

import { PageContent } from 'ui/organisms'
import { NotFoundPlaceholder } from 'ui/molecules'


const Container = PageContent.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f3f2;
`

export const NotFoundPage = ({ history }) => (
  <Container>
    <NotFoundPlaceholder
      title='404'
      buttonText='На главную'
      text='Такой страницы не существует'
      onButtonClick={() => history.replace('/')}
    />
  </Container>
)

NotFoundPage.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
}
