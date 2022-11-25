import styled from 'styled-components'

const ItemWrapper = styled.div`
  padding: 0 8px;
  width: 20%;
  flex-shrink: 0;
  .content{
    padding-top: 125%;
    position: relative;
    img{
      position: absolute;
      top: 0;
      width: 100%;
    }
    .cover{
      position: absolute;
      top: 50%;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
      opacity: 0.6;
    }
    .info{
      position: absolute;
      bottom:10%;
      text-align:center;
      width: 100%;
      z-index: 3;
      .city{
        color: #fff;
        font-size: 18px;
        line-height: 25px;
        font-weight: 500;
      }
      .price{
        color: #fff;
        font-size: 14px;

      }
    }
  }
`


export default ItemWrapper