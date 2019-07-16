import styled from 'styled-components'

export const CircleBullets = styled.ol `
  list-style: none;
  counter-reset: circle-counter;
  padding: 0;
  margin: 0;

  li {
    counter-increment: circle-counter;
    margin-bottom: 25px;
    position: relative;
    line-height: 40px;
    padding-left: 35px;

    :before {
      content: counter(circle-counter);
      color: white;
      background-color: grey;
      font-size: 16px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      margin-right: 10px;
      position: absolute;
      top: 8px;
      left: 0;
    }
  }
`
