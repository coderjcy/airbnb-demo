import styled from 'styled-components'
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  box-shadow: 0px 0px 1px 1px #eee;
  padding: 0 24px;
  position: relative;
  background-color: #fff;
  z-index: 10;
  .left {
    background-color: red;
  }
  .center {
    background-color: green;

  }
  .right {
    background-color: red;

  }
`