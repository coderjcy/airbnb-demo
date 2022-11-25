import styled from 'styled-components'

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.text.secondaryColor};

  .MuiPaginationItem-page.Mui-selected{
    background-color: #222;
    color: #fff;
  }
  .MuiPaginationItem-page{
    margin: 0 6px;
    &:hover{
      text-decoration: underline;
    }
  }
  .MuiPaginationItem-icon{
    font-size: 22px;
  }
  .hint{
    font-size: 14px;
    margin-top: 16px;
    line-height: 18px;
  }
`





export default PaginationWrapper