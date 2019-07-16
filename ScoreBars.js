import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'componentry'

const Bar = styled.div`
  width: 1px;
  height: 12px;
  background-color: #89a19d;
  opacity: 0.35;
`

const StyledFlex = styled(Flex)`
  &.low {
    ${Bar}:nth-of-type(1) {
      opacity: 1;
    }
  }
  &.medium {
    ${Bar}:nth-of-type(-n+2) {
      opacity: 1;
      background-color: #ffb726;
    }
  }
  &.high {
    ${Bar}:nth-of-type(-n+3) {
      opacity: 1;
      background-color: #ff8b40;
    }
  }
  &.critical {
    ${Bar} {
      opacity: 1;
      background-color: #ff6040;
    }
  }
`

const ScoreBars = ({ severity, mr }) => {
  return (
    <StyledFlex justify="between" width={15} mr={mr} className={severity}>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </StyledFlex>
  )
}

ScoreBars.propTypes = {
  severity: string
}

export default ScoreBars
