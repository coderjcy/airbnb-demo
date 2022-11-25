import React, { memo } from 'react'
import ScrollView from '@/base-ui/scroll-view'
import HouseAreaWrapper from './style'
import HouseItem from '@/components/house-item'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

const HouseAreaV3 = memo((props) => {
  const {info,itemWidth='25%'} = props; 
  return (
    <HouseAreaWrapper  itemWidth={itemWidth}>
      <div className='house-area-v1'>
        <SectionHeader title={info.title} subtitle={info.subtitle}/>
        <ScrollView>
          <ul className='houses-wrapper' >
            {info.list?.map(item=> (<li key={item.id} ><HouseItem houseInfo={item}></HouseItem></li>))}
          </ul>
        </ScrollView>
        <SectionFooter name={info.title}></SectionFooter>
      </div>
    </HouseAreaWrapper>
  )
})

export default HouseAreaV3