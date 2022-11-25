import styled from 'styled-components'

const HouseAreaWrapper = styled.div`
margin-top: 30px;


.wrapper{
    overflow: hidden;
  }
.houses-wrapper{
  display: flex;
  li{
    width: ${props => props.itemWidth};
    flex-shrink: 0;
  }
}
`

export default HouseAreaWrapper