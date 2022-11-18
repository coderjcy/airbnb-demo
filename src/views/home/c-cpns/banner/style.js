import styled from 'styled-components'
import bgImg from '@/assets/img/bg.jpg'


const BannerWrapper = styled.div`
  background: url(${bgImg}) center/cover;
  /* background: url(${require("@/assets/img/bg.jpg")}) center/cover; */
  height: 529px;
`

export default BannerWrapper