import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


export const PageContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  ${p => p.withFixedBar && css`
    margin-top: 48px;
  `}
`

PageContent.propTypes = {
  withFixedBar: PropTypes.bool,
}

PageContent.defaultProps = {
  withFixedBar: false,
}
