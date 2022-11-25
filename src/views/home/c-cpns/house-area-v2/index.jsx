import React, { memo,  useState } from 'react'
import classNames from 'classnames'


import ScrollView from '@/base-ui/scroll-view'
import HouseAreaWrapper from './style'
import HouseItem from '@/components/house-item'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

const HouseAreaV1 = memo((props) => {
  const {info,itemWidth='25%'} = props;
  const [index,setIndex] = useState(0)
  const handleCityClick = (index)=>{
    setIndex(index)
  }

  return (
    <HouseAreaWrapper  itemWidth={itemWidth}>
      <div className='house-area-v1'>
        <SectionHeader title={info.title} subtitle={info.subtitle}/>

        {  info.dest_address &&
        <ScrollView>
          <div className='tabs'>
            {info.dest_address?.map((item,i)=> <span className={classNames('city',{'active-city':index === i})} key={item.name} onClick={e=>handleCityClick(i)}>{item.name}</span>)}
          </div>
        </ScrollView>}
        <ul className='houses-wrapper' >
          {Object.values(info.dest_list??{})[index]?.map(item=> (<li key={item.id} ><HouseItem houseInfo={item}></HouseItem></li>))}
        </ul>
        <SectionFooter name={info.title}></SectionFooter>
      </div>
    </HouseAreaWrapper>
  )
})

export default HouseAreaV1