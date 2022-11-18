import React, { memo } from 'react'
import HouseAreaWrapper from './style'
import HouseItem from '@/components/house-item'
import SectionHeader from '@/components/section-header'
const HouseAreaV1 = memo((props) => {
  const {premiumInfo} = props
  return (
    <HouseAreaWrapper>
      <div className='house-area-v1'>
        <SectionHeader title={premiumInfo.title} subtitle='来看看这些颇受房客好评的房源吧'/>
        <ul className='houses-wrapper'>
          {premiumInfo.list?.slice(0,8).map(item=> (<li key={item.id} ><HouseItem houseInfo={item}></HouseItem></li>))}
        </ul>
      </div>
    </HouseAreaWrapper>
  )
})

export default HouseAreaV1