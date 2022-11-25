import styled from 'styled-components'

const FooterWrapper = styled.div`
  height: 30px;
  margin-top: 8px;
  font-size: 17px;
  > div {
    display: flex;
    align-items: center;
  }
  .text{
    margin-right: 6px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }

  
`


export default FooterWrapper