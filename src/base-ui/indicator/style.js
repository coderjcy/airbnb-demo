import styled from 'styled-components'

const IndicatorWrapper = styled.div`
  > div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    transition:  transform 200ms ease;
    transform: translateX(${props => (-props.left)}px);
    > *{
      flex-shrink: 0;
    }
  }
`

export default IndicatorWrapper