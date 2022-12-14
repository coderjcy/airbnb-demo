import React, { memo } from 'react'
import HouseAreaWrapper from './style'
import HouseItem from '@/components/house-item'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

const HouseAreaV1 = memo((props) => {
  const {info,itemWidth='25%'} = props
  return (
    <HouseAreaWrapper  itemWidth={itemWidth}>
      <div className='house-area-v1'>
        <SectionHeader title={info.title} subtitle={info.subtitle}/>
        <ul className='houses-wrapper'>
          {info.list?.slice(0,8).map(item=> (<li key={item.id} ><HouseItem houseInfo={item}></HouseItem></li>))}
        </ul>
        <SectionFooter />
      </div>
    </HouseAreaWrapper>
  )
})

export default HouseAreaV1