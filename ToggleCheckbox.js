const ToggleCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  appearance: none;
  width: 54px;
  height: 22px;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color ease 0.3s;
  background-color: ${colors.lightGrey};
  &:before {
    content: 'on off';
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2;
    width: 18px;
    height: 20px;
    border-radius: 1px;
    background: ${colors.white};
    left: 1px;
    top: 1px;
    text-transform: uppercase;
    text-indent: -30px;
    word-spacing: 33px;
    color: ${colors.white};
    white-space: nowrap;
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
    font-weight: 600;
    font-size: 12px;
  }
  &:checked {
    background-color: ${colors.nSolidGreen};
  }
  &:checked:before {
    left: 35px;
  }
`
