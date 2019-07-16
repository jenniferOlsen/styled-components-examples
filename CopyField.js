import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'

const ClickText = styled.span`
  display: ${p => (p.clicked ? 'inline-block' : 'none')};
  position: absolute;
  color: ${p => (p.clicked ? p.theme.colors.green : p.theme.colors.gray)};
  width: 80px;
  /* input is 40px tall, span is 14px -> 13px is 1/2 remaining 26px */
  top: 13px;
  cursor: pointer;
  font-size: 12px;
  right: 0;
  background-color: darkgray;
  /* gradient pseudo-element */
  :before {
    width: 100px;
    height: 40px;
    content: '';
    position: absolute;
    top: -13px;
    right: 80px;
    background-image: linear-gradient(to right, rgba(24, 25, 26, 0), darkgray);
  }
`

const Container = styled.div`
  position: relative;
  line-height: 1;
  flex-grow: 1;

  :hover {
    /* Show click to copy prompt on hover of content */
    /* This could be handled with 10x the code using mouse events on the container... */
    ${ClickText} {
      display: inline-block;
    }

    input {
      background-color: darkgray;
    }
  }
`

const Caret = styled.span`
  color: gray;
  line-height: 1;
  position: absolute;
  left: 9px;
  /* input is 40px tall, span is 12px -> 15px is 1/2 remaining 28px plus 1px 😜 */
  top: 15px;
  font-family: 'Source Code Pro', monospace;
  font-size: 12px;
`

const StyledCopyField = styled.input`
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 12px;
  font-family: 'Source Code Pro', monospace;
  padding-left: 25px;
  color: white;
  background-color: ${p => (p.clicked ? p.theme.colors.gray900 : p.theme.colors.gray800)};
  border-radius: 4px;
`

class CopyField extends Component {
  static propTypes = {
    className: string,
    'data-tag-id': string,
    value: string,
  }

  static defaultProps = {
    value: '',
  }

  state = {
    clicked: false,
  }

  copyOnClick = () => {
    copy(this.props.value)
    this.setState({
      clicked: true
    }, () => {
      setTimeout(() => {
        this.setState({
          clicked: false
        })
      }, 1500)
    })
  }

  render() {
    const { clicked } = this.state
    const { value, className } = this.props

    return (
      <Container
        className={className}
        clicked={clicked}
        onClick={this.copyOnClick}
        data-tag-id={this.props['data-tag-id']}
      >
        <Caret>></Caret>
        <StyledCopyField clicked={clicked} readOnly value={value} />
        {clicked ? (
          <ClickText clicked={clicked}>Copied!</ClickText>
        ) : (
            <ClickText className="prompt" clicked={clicked}>
              Click to Copy
          </ClickText>
          )}
      </Container>
    )
  }
}

export default CopyField
