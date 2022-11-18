import styled from 'styled-components'
import iconLeftArrow from '@/assets/svg/icon-right-arrow'
/* background: ${iconLeftArrow} no-repeat; */

const HeaderWrapper = styled.div`
  height: 94px;
  color: ${props => props.theme.text.secondaryColor};
  display: flex;

  .content{
    position: relative;
    align-self:start;
    padding-right: 38px;
    .title{
      font-size: 22px;
      font-weight: bold;
    }

    .subtitle{
      margin-top: 12px;
      font-size: 16px;
      letter-spacing: 1px;
    }

    &:hover{
      &::after{
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-right: 1px solid;
        border-bottom: 1px solid;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
`


export default HeaderWrapper