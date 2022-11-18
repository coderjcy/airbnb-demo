import styled from 'styled-components'

const HouseItemWrapper = styled.div`
  padding: 8px;
  padding-bottom: 12px;
  width: 100%;
  /* margin-left: -8px; */
  .cover{
    width: 246px;
    height: 164px;
  }


  .info{
    padding-top: 8px;

    .specification{
      font-size: 12px;
      line-height: 20px;
      color:${props => props.verifyColor};
    }

    .name{
      font-size: 16px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: hidden; 
      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient:vertical;
    }
    .price{
      height: 20px;
  
      color: ${props => props.theme.text.primaryColor};
    }

    .span{
      margin-top: 2px;
      display: flex;
      align-items: center;
      height: 22px;
      columns: ${props => props.theme.text.primaryColor};
      font-size: 12px;
      .MuiRating-icon{
        margin-right: -1.5px;
      }
    }
  }
`


export default HouseItemWrapper