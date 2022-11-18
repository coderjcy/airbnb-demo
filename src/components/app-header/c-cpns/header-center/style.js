import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    border-radius: 30px;
    color: ${props => props.theme.text.secondaryColor};
    font-size: 14px;
    font-weight: 500;
    padding: 0 8px;
    padding-left: 25px;
    cursor: pointer;
    box-shadow: 0 0 3px 1px #ddd;
    ${props => props.theme.mixin.boxShadow}
    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
      width: 32px;
      height: 32px;
      color: #fff;
    }
  }
`