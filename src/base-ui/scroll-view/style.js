import styled from 'styled-components'

const ScrollWrapper = styled.div`
  position: relative;
  .left-btn,.right-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 1px 2px #eee;
    z-index: 9;
  }
  .left-btn{
    left: -20px;

  }
  .right-btn{
    right: -20px;
  }

  .slot{
    overflow: hidden;
    
    .wrap{
      transition: transform 0.5s ease;
      transform: translateX(-${props => props.offsetLeft}px);
    }
  }
`

export default ScrollWrapper