import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end ;
  font-weight: 500;
  .btns{
    display: flex;
    align-items: center;
    margin-right: 10px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      color: ${props => props.theme.text.secondaryColor};
      font-size: 14px;
      border-radius: 22px;
      cursor: pointer;
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
  .profile{
    position: relative;
    padding: 5px;
    padding-left: 12px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #ccc;
    color: #717171;
    ${props => props.theme.mixin.boxShadow}
    .profile-c{
      display: flex;
      align-items: center;
    }
    .menu{
      margin-right: 12px;
    }
    .avatar{
      position: relative;

      .point{
        position: absolute;
        top:-2px;
        right: 2px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #fff;
        background-color: ${props => props.theme.color.primaryColor};
      }
    }
    .panel{
      position: absolute;
      z-index: 20;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px 3px #eee;
      top: 125%;
      right: 0px;
      font-weight: normal;
      border-radius: 10px;
      color: ${props => props.theme.text.secondaryColor};
      .top{
        padding: 10px 0;
        border-bottom:1px solid #ccc
      }
      .bottom{
        padding: 10px 0;
      }
      .item{
        padding: 12px 16px;
        &:hover{
          background-color: #f7f7f7;
        }
      }
    }
  }
`