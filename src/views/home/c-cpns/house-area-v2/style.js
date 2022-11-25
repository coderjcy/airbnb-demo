import styled from 'styled-components'

const HouseAreaWrapper = styled.div`
margin-top: 30px;
.tabs{
  display: flex;
  padding: 20px 0;
  .city{
    display: flex;
    flex-shrink: 0;
    padding: 14px 16px;
    white-space: nowrap;
    height: 48px;
    flex-basis:  120px; // 最小宽度
    align-items: center;
    justify-content: center;
    border: 0.5px solid #D8D8D8;
    border-radius: 3px;
    box-shadow: 0px 1px 1px 1px #eee;
    ${props => props.theme.mixin.boxShadow}
    margin-right: 16px;
    font-size: 17px;
    cursor: pointer;
    color: ${props => props.theme.text.primaryColor};
  }
  .active-city{
    background-color: #00848a;
    color: #fff;
  }
}
.houses-wrapper{
  display: flex;
  flex-wrap: wrap;
  li{
    width: ${props => props.itemWidth};
  }
}
`

export default HouseAreaWrapper