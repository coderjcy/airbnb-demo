import styled from 'styled-components'

const HouseAreaWrapper = styled.div`
margin-top: 30px;
  .houses-wrapper{
    display: flex;
    flex-wrap: wrap;
    li{
      width: ${props => props.itemWidth};
    }
  }
`

export default HouseAreaWrapper