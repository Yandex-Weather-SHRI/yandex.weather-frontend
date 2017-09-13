import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


const Container = styled.div`
  height: 48px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  transition: transform 300ms ease-in-out;
  ${p => !p.fixed && css`
    transform: translateY(-101%);
  `}
`

const ElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
`

const Title = styled.span`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;
`

export class AppBar extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.lastScrollPosition = 0
    this.scrollDelta = 20
    this.state = {
      fixed: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleFixHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleFixHeader)
  }

  toggleFixHeader = () => {
    const scrollTop = window.pageYOffset
    const appBarHeight = this.appBar.offsetHeight

    if (Math.abs(this.lastScrollPosition - scrollTop) > this.scrollDelta) {
      this.setState({
        fixed: scrollTop < this.lastScrollPosition || scrollTop <= appBarHeight,
      })

      this.lastScrollPosition = scrollTop
    }
  }

  render() {
    const { fixed } = this.state
    const { title, elementLeft, elementRight } = this.props

    return (
      <Container {...{ fixed }} innerRef={e => this.appBar = e}>
        <ElementWrapper>
          {elementLeft}
        </ElementWrapper>
        <Title>
          {title}
        </Title>
        <ElementWrapper>
          {elementRight}
        </ElementWrapper>
      </Container>
    )
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  elementLeft: PropTypes.node,
  elementRight: PropTypes.node,
}

AppBar.defaultProps = {
  elementLeft: null,
  elementRight: null,
}
